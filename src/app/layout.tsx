import React from 'react';
import type { Metadata } from 'next';
import Two26Shell from '../components/layout/Two26Shell';
import '../index.css';

export const metadata: Metadata = {
  title: 'Jeevan Shrestha | Frontend Developer (JDev)',
  description:
    'Jeevan Shrestha (JDev) | Frontend Developer Portfolio — Building seamless, high-performance web applications with React.js, Next.js, TypeScript, and Tailwind CSS.',
  openGraph: {
    title: 'Jeevan Shrestha | Frontend Developer (JDev)',
    description:
      'Jeevan Shrestha (JDev) | Frontend Developer Portfolio — Building seamless, high-performance web applications with React.js, Next.js, TypeScript, and Tailwind CSS.',
    images: ['/jeevan/banner-right-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeevan Shrestha | Frontend Developer (JDev)',
    description:
      'Jeevan Shrestha (JDev) | Frontend Developer Portfolio — Building seamless, high-performance web applications with React.js, Next.js, TypeScript, and Tailwind CSS.',
    images: ['/jeevan/banner-right-image.jpg'],
  },
  icons: {
    icon: '/jeevan/logo.png',
    apple: '/jeevan/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-wf-domain="sthajeevan.com.np"
      data-wf-page="6aaad679fdb9d914f7f52024"
      data-wf-site="6aaad679fdb9d914f7f52049"
      className="w-mod-js"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="/cdn/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52051_MDNichromeTest-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/cdn/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52052_MDNichromeTest-Dark.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/cdn/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52054_NeueMontreal-Medium.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/cdn/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52053_NeueMontreal-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link href="/cdn/webflow.css" rel="stylesheet" type="text/css" />
      </head>
      <body className="body" suppressHydrationWarning>
        <Two26Shell>{children}</Two26Shell>
      </body>
    </html>
  );
}
