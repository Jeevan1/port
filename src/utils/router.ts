export interface RouteConfig {
  route: string;
  slug: string;
  isCaseStudy: boolean;
}

export const SUPPORTED_ROUTES: Record<string, RouteConfig> = {
  '/': {
    route: '/',
    slug: 'home',
    isCaseStudy: false,
  },
  '/work': {
    route: '/work',
    slug: 'work',
    isCaseStudy: false,
  },
  '/about': {
    route: '/about',
    slug: 'about',
    isCaseStudy: false,
  },
  '/work/heygluco': {
    route: '/work/heygluco',
    slug: 'heygluco',
    isCaseStudy: true,
  },
  '/work/yum-yum': {
    route: '/work/yum-yum',
    slug: 'yum-yum',
    isCaseStudy: true,
  },
  '/work/tanti-maria': {
    route: '/work/tanti-maria',
    slug: 'tanti-maria',
    isCaseStudy: true,
  },
  '/work/munchies-and-cream': {
    route: '/work/munchies-and-cream',
    slug: 'munchies-and-cream',
    isCaseStudy: true,
  },
  '/work/mvp': {
    route: '/work/mvp',
    slug: 'mvp',
    isCaseStudy: true,
  },
  '/work/merci': {
    route: '/work/merci',
    slug: 'merci',
    isCaseStudy: true,
  },
  '/work/lpi': {
    route: '/work/lpi',
    slug: 'lpi',
    isCaseStudy: true,
  },
  '/work/bagel-bar': {
    route: '/work/bagel-bar',
    slug: 'bagel-bar',
    isCaseStudy: true,
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname) return '/';
  const cleaned = pathname.split('?')[0].split('#')[0].toLowerCase().replace(/\/+$/, '');
  return cleaned === '' ? '/' : cleaned;
}

export function resolveRouteConfig(pathname: string): RouteConfig {
  const normalized = normalizePathname(pathname);
  return SUPPORTED_ROUTES[normalized] || SUPPORTED_ROUTES['/'];
}

export function shouldInterceptInternalLink(
  href: string | null | undefined,
  target?: string | null,
  hasDownload?: boolean
): boolean {
  if (!href) return false;
  if (target === '_blank' || hasDownload) return false;
  if (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  ) {
    return false;
  }
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const url = new URL(href);
      if (url.hostname === 'two26.studio' || url.hostname === 'www.two26.studio') {
        const norm = normalizePathname(url.pathname);
        return Boolean(SUPPORTED_ROUTES[norm]);
      }
      return false;
    } catch {
      return false;
    }
  }
  if (href.startsWith('/')) {
    const norm = normalizePathname(href);
    return Boolean(SUPPORTED_ROUTES[norm]);
  }
  return false;
}

export function shouldSkipPageLoader(search: string, wasNavigatedInSession: boolean): boolean {
  const params = new URLSearchParams(search || '');
  if (params.get('autostart') === '1' || params.get('skiploader') === '1') {
    return true;
  }
  return wasNavigatedInSession;
}
