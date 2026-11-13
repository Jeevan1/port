import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizePathname,
  resolveRouteConfig,
  shouldInterceptInternalLink,
  shouldSkipPageLoader,
} from './router';
import { getPageRuntimeConfig } from '../data/pageConfig';

test('normalizePathname normalizes trailing slashes, query strings, and case', () => {
  assert.equal(normalizePathname('/'), '/');
  assert.equal(normalizePathname('/work/'), '/work');
  assert.equal(normalizePathname('/ABOUT?foo=bar#top'), '/about');
  assert.equal(normalizePathname('/work/HeyGluco/'), '/work/heygluco');
});

test('resolveRouteConfig resolves portfolio routes cleanly', () => {
  const home = resolveRouteConfig('/');
  assert.equal(home.slug, 'home');
  assert.equal(home.isCaseStudy, false);

  const work = resolveRouteConfig('/work');
  assert.equal(work.slug, 'work');
  assert.equal(work.isCaseStudy, false);

  const about = resolveRouteConfig('/about');
  assert.equal(about.slug, 'about');
  assert.equal(about.isCaseStudy, false);

  const unknown = resolveRouteConfig('/non-existent-route');
  assert.equal(unknown.route, '/');
});

test('getPageRuntimeConfig returns single-page homepage config for Jeevan Shrestha portfolio', () => {
  const homeCfg = getPageRuntimeConfig('/');
  assert.equal(homeCfg.wfPage, '6aaad679fdb9d914f7f52024');
  assert.equal(homeCfg.title, 'Jeevan Shrestha | Frontend Developer (JDev)');
  assert.equal(homeCfg.isCaseStudy, false);

  const workCfg = getPageRuntimeConfig('/work');
  assert.equal(workCfg.wfPage, '6aaad679fdb9d914f7f52024');
  assert.equal(workCfg.isCaseStudy, false);

  const aboutCfg = getPageRuntimeConfig('/about');
  assert.equal(aboutCfg.wfPage, '6aaad679fdb9d914f7f52024');
  assert.equal(aboutCfg.isCaseStudy, false);
});

test('shouldInterceptInternalLink distinguishes internal routes from external/hash/mailto links', () => {
  assert.equal(shouldInterceptInternalLink('/work'), true);
  assert.equal(shouldInterceptInternalLink('/about'), true);
  assert.equal(shouldInterceptInternalLink('/work/heygluco'), true);
  assert.equal(shouldInterceptInternalLink('#about'), false);
  assert.equal(shouldInterceptInternalLink('mailto:shresthaj1981@gmail.com'), false);
  assert.equal(shouldInterceptInternalLink('https://github.com/Jeevan1'), false);
  assert.equal(shouldInterceptInternalLink('/work', '_blank'), false);
});

test('shouldSkipPageLoader respects ?autostart=1 and session navigation flag', () => {
  assert.equal(shouldSkipPageLoader('?autostart=1', false), true);
  assert.equal(shouldSkipPageLoader('?skiploader=1', false), true);
  assert.equal(shouldSkipPageLoader('', true), true);
  assert.equal(shouldSkipPageLoader('', false), false);
});
