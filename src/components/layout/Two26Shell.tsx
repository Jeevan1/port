'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import GlobalEmbeds from './GlobalEmbeds';
import PageLoader from './PageLoader';
import Header from './Header';
import Footer from './Footer';
import { getPageRuntimeConfig } from '../../data/pageConfig';
import {
  normalizePathname,
  shouldInterceptInternalLink,
  shouldSkipPageLoader,
} from '../../utils/router';

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
    SplitText?: any;
    DrawSVGPlugin?: any;
    MotionPathPlugin?: any;
    CustomEase?: any;
    CustomBounce?: any;
    Lenis?: any;
    lenis?: any;
    Webflow?: any;
    __two26LoaderDone?: boolean;
    __two26VendorPromise?: Promise<void>;
    __two26MobileMenu?: {
      open: () => void;
      close: () => void;
      toggle: (e?: Event) => void;
      isOpen: () => boolean;
    };
    onTwo26Ready?: (cb: () => void) => void;
  }
}

const VENDOR_SCRIPTS = [
  '/cdn/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/cdn/6aaad679fdb9d914f7f52049/js/webflow.schunk.6b343d7253fa0d10.js',
  '/cdn/6aaad679fdb9d914f7f52049/js/webflow.schunk.7321a5097fb66f41.js',
  '/cdn/6aaad679fdb9d914f7f52049/js/webflow.0f9afed3.c9eff032aa002dcc.js',
  '/cdn/gsap/3.15.0/gsap.min.js',
  '/cdn/gsap/3.15.0/SplitText.min.js',
  '/cdn/gsap/3.15.0/ScrollTrigger.min.js',
  '/cdn/gsap/3.15.0/DrawSVGPlugin.min.js',
  '/cdn/gsap/3.15.0/MotionPathPlugin.min.js',
  '/cdn/gsap/3.15.0/CustomEase.min.js',
  '/cdn/gsap/3.15.0/CustomBounce.min.js',
  '/cdn/npm/lenis_1.1.20/dist/lenis.min.js',
];

function loadScriptSequential(src: string): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (existing && existing.dataset.loaded === 'true') {
      resolve();
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => {
      s.dataset.loaded = 'true';
      resolve();
    };
    s.onerror = () => {
      resolve();
    };
    document.head.appendChild(s);
  });
}

function ensureVendorScriptsLoaded(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.__two26VendorPromise) return window.__two26VendorPromise;

  window.__two26VendorPromise = (async () => {
    for (const src of VENDOR_SCRIPTS) {
      await loadScriptSequential(src);
    }
    if (
      window.gsap &&
      window.SplitText &&
      window.ScrollTrigger &&
      window.DrawSVGPlugin &&
      window.MotionPathPlugin &&
      window.CustomEase &&
      window.CustomBounce
    ) {
      try {
        window.gsap.registerPlugin(
          window.SplitText,
          window.ScrollTrigger,
          window.DrawSVGPlugin,
          window.MotionPathPlugin,
          window.CustomEase,
          window.CustomBounce
        );
      } catch {
        // ignore
      }
    }
  })();

  return window.__two26VendorPromise;
}

interface Two26ShellProps {
  children: React.ReactNode;
}

export default function Two26Shell({ children }: Two26ShellProps) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const normalizedPath = normalizePathname(pathname);
  const pageConfig = getPageRuntimeConfig(normalizedPath);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      // Do not intercept CTA buttons that open the contact modal or close buttons
      if (
        anchor.classList.contains('cta-btn') ||
        anchor.classList.contains('close-btn') ||
        anchor.hasAttribute('data-contact-trigger') ||
        anchor.hasAttribute('data-contact-close')
      ) {
        return;
      }

      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;

      // Smooth-scroll hash links (#about, #projects, #skills, #testimonials, #faq)
      if (rawHref.startsWith('#') && rawHref.length > 1) {
        const targetEl = document.querySelector(rawHref) as HTMLElement | null;
        if (targetEl) {
          e.preventDefault();
          if (window.__two26MobileMenu && window.__two26MobileMenu.isOpen()) {
            window.__two26MobileMenu.close();
          }
          if (window.lenis) {
            window.lenis.scrollTo(targetEl, { offset: -20 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }

      if (
        shouldInterceptInternalLink(
          rawHref,
          anchor.getAttribute('target'),
          anchor.hasAttribute('download')
        )
      ) {
        e.preventDefault();
        let nextPath = rawHref;
        if (nextPath.startsWith('http')) {
          try {
            nextPath = new URL(nextPath).pathname;
          } catch {
            nextPath = '/';
          }
        }
        const normalizedNext = normalizePathname(nextPath);
        sessionStorage.setItem('two26_navigated', 'true');
        if (normalizedNext !== normalizePathname(window.location.pathname)) {
          router.push(normalizedNext);
        } else {
          if (window.lenis) {
            window.lenis.scrollTo(0);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => document.removeEventListener('click', handleDocumentClick, true);
  }, [router]);

  useEffect(() => {
    let cancelled = false;
    const cfg = getPageRuntimeConfig(normalizedPath);

    async function initRouteAnimations() {
      // 0. Ensure jQuery, Webflow, GSAP + plugins, and Lenis are loaded in strict order
      await ensureVendorScriptsLoaded();
      if (cancelled) return;

      // 1. Clean up previous page instances (Lenis, ScrollTrigger, GSAP tweens)
      if (window.lenis) {
        try {
          window.lenis.destroy();
        } catch {
          // ignore
        }
        window.lenis = null;
      }

      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.getAll().forEach((st: any) => st.kill());
          window.ScrollTrigger.clearMatchMedia();
        } catch {
          // ignore
        }
      }

      if (window.gsap) {
        try {
          window.gsap.globalTimeline.clear();
        } catch {
          // ignore
        }
      }

      // 2. Update <html> attributes & document title
      const htmlEl = document.documentElement;
      htmlEl.setAttribute('data-wf-domain', 'sthajeevan.com.np');
      htmlEl.setAttribute('data-wf-page', cfg.wfPage);
      htmlEl.setAttribute('data-wf-site', cfg.wfSite);
      htmlEl.removeAttribute('data-wf-collection');
      htmlEl.removeAttribute('data-wf-item-slug');
      document.title = cfg.title;

      // Reset body inline styles before new page scripts run
      document.body.style.cssText = '';
      htmlEl.style.cssText = '';

      // 3. Handle ?autostart=1 or session navigation for loader skipping
      const wasNavigated = sessionStorage.getItem('two26_navigated') === 'true';
      if (shouldSkipPageLoader(window.location.search, wasNavigated)) {
        sessionStorage.setItem('two26_navigated', 'true');
      }

      // 4. Wait for Webflow custom fonts (Mdnichrometest & Neuemontreal) with a 1.5s cap
      if (document.fonts) {
        try {
          await Promise.race([
            Promise.all([
              document.fonts.load('700 1em Mdnichrometest'),
              document.fonts.load('400 1em "Mdnichrometest Dark"'),
              document.fonts.load('500 1em Neuemontreal'),
              document.fonts.load('400 1em Neuemontreal'),
            ]),
            new Promise((resolve) => setTimeout(resolve, 1500)),
          ]);
        } catch {
          // ignore
        }
      }
      if (cancelled) return;

      const container = containerRef.current;
      if (!container) return;

      // 5. Execute tail inline scripts FIRST (Lenis smooth scroll & ScrollTrigger scrollerProxy)
      for (const tailCode of cfg.tailScripts) {
        const s = document.createElement('script');
        s.textContent = tailCode;
        container.appendChild(s);
      }

      // 6. Activate all inert <script type="text/two26-script"> tags inside the mounted component tree
      const inertScripts = Array.from(
        container.querySelectorAll('script[type="text/two26-script"]')
      );
      for (const oldScript of inertScripts) {
        if (oldScript.id && oldScript.id.startsWith('wf-template-')) {
          continue;
        }
        const newScript = document.createElement('script');
        let code = oldScript.textContent || '';
        if (code.includes('initTwo26PageLoader')) {
          code = code.replace(
            'if (wasNavigated && !(isReload || isReloadLegacy)) {',
            'if ((wasNavigated && !(isReload || isReloadLegacy)) || window.location.search.includes("autostart=1")) {'
          );
        }
        newScript.textContent = code;
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      }

      // 7. Re-initialize Webflow IX2 & Lottie animations for the newly mounted DOM
      if (window.Webflow) {
        try {
          window.Webflow.destroy();
          window.Webflow.ready();
          const ix2 = window.Webflow.require('ix2');
          if (ix2 && typeof ix2.init === 'function') {
            ix2.init();
          }
          const lottie = window.Webflow.require('lottie');
          if (lottie && typeof lottie.init === 'function') {
            lottie.init();
          }
        } catch {
          // ignore Webflow re-init warnings
        }
      }

      // 8. Refresh ScrollTrigger after layout settles
      setTimeout(() => {
        if (!cancelled && window.ScrollTrigger) {
          try {
            window.ScrollTrigger.refresh();
          } catch {
            // ignore
          }
        }
      }, 250);
    }

    initRouteAnimations();

    return () => {
      cancelled = true;
    };
  }, [normalizedPath]);

  return (
    <div key={normalizedPath} ref={containerRef} data-testid="two26-page-root">
      <GlobalEmbeds isCaseStudy={false} />
      <PageLoader />
      <div className="page">
        <Header variant="default" />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
