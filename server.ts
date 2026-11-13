import { spawn, execSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import net from 'node:net';

const NEXT_PORT = 3001;
const PUBLIC_PORT = 3000;

// Ensure .next directory is writable if it exists
try {
  if (fs.existsSync('.next')) {
    execSync('chmod -R 777 .next', { stdio: 'ignore' });
  }
} catch {
  // ignore permission errors if non-root
}

// Determine whether to run 'start' (only if NODE_ENV=production AND a production build exists) or 'dev'
const hasProdBuild = fs.existsSync('.next/BUILD_ID');
const mode = process.env.NODE_ENV === 'production' && hasProdBuild ? 'start' : 'dev';

// Keep stdin pipe open so Next.js 16 CLI does not exit when spawned with /dev/null stdin
const child = spawn(
  process.execPath,
  ['./node_modules/next/dist/bin/next', mode, '-p', String(NEXT_PORT), '-H', '127.0.0.1'],
  {
    stdio: ['pipe', 'inherit', 'inherit'],
    env: process.env,
  }
);

function waitForNextServer(port: number, timeoutMs = 60000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      const sock = net.createConnection({ port, host: '127.0.0.1' });
      sock.once('connect', () => {
        sock.destroy();
        resolve();
      });
      sock.once('error', () => {
        sock.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(new Error('Timed out waiting for Next.js server'));
        } else {
          setTimeout(check, 50);
        }
      });
    };
    check();
  });
}

const nextReadyPromise = waitForNextServer(NEXT_PORT);

// Proxy port 3000 -> 127.0.0.1:3001 stripping cross-origin proxy headers
// so Next.js 16 Turbopack never returns 403 Forbidden on /_next/static/* chunks in iframes
const proxyServer = http.createServer(async (clientReq, clientRes) => {
  try {
    await nextReadyPromise;
  } catch {
    if (!clientRes.headersSent) {
      clientRes.writeHead(503, { 'Content-Type': 'text/plain' });
    }
    clientRes.end('Service Starting');
    return;
  }

  const headers: http.IncomingHttpHeaders = { ...clientReq.headers };
  headers.host = `127.0.0.1:${NEXT_PORT}`;
  delete headers['x-forwarded-host'];
  delete headers['x-forwarded-proto'];
  delete headers['x-forwarded-for'];
  delete headers['origin'];

  const proxyReq = http.request(
    {
      hostname: '127.0.0.1',
      port: NEXT_PORT,
      path: clientReq.url,
      method: clientReq.method,
      headers,
    },
    (proxyRes) => {
      clientRes.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
      proxyRes.pipe(clientRes, { end: true });
    }
  );

  proxyReq.on('error', () => {
    if (!clientRes.headersSent) {
      clientRes.writeHead(502, { 'Content-Type': 'text/plain' });
    }
    clientRes.end('Bad Gateway');
  });

  clientReq.pipe(proxyReq, { end: true });
});

proxyServer.on('upgrade', async (req, clientSocket, head) => {
  try {
    await nextReadyPromise;
  } catch {
    clientSocket.destroy();
    return;
  }

  const upstreamSocket = net.connect(NEXT_PORT, '127.0.0.1', () => {
    const reqLines = [`${req.method} ${req.url} HTTP/${req.httpVersion}`];
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
      const k = req.rawHeaders[i];
      const v = req.rawHeaders[i + 1];
      const lower = k.toLowerCase();
      if (
        lower === 'host' ||
        lower === 'origin' ||
        lower === 'x-forwarded-host' ||
        lower === 'x-forwarded-proto' ||
        lower === 'x-forwarded-for'
      ) {
        continue;
      }
      reqLines.push(`${k}: ${v}`);
    }
    reqLines.push(`Host: 127.0.0.1:${NEXT_PORT}`);
    reqLines.push('', '');
    upstreamSocket.write(reqLines.join('\r\n'));
    if (head && head.length > 0) {
      upstreamSocket.write(head);
    }
    upstreamSocket.pipe(clientSocket);
    clientSocket.pipe(upstreamSocket);
  });

  upstreamSocket.on('error', () => clientSocket.destroy());
  clientSocket.on('error', () => upstreamSocket.destroy());
});

// Listen immediately on dual-stack port 3000 (IPv4 + IPv6) so readiness checks pass immediately
// while incoming HTTP requests await nextReadyPromise before forwarding to Next.js
proxyServer.listen(PUBLIC_PORT, () => {
  console.log(`[Server] Proxy listening on http://localhost:${PUBLIC_PORT} -> 127.0.0.1:${NEXT_PORT}`);
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

process.on('SIGTERM', () => {
  proxyServer.close();
  child.kill('SIGTERM');
});

process.on('SIGINT', () => {
  proxyServer.close();
  child.kill('SIGINT');
});
