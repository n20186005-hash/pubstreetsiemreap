import en from './en.json';
import km from './km.json';
import zh from './zh.json';
import { siteConfig } from '../config';

export const defaultLang = 'km';
export const languagesList = ['km', 'en', 'zh'] as const;
export type Lang = (typeof languagesList)[number];

const ui: Record<string, any> = { km, en, zh };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const first = seg[0];
  if ((languagesList as readonly string[]).includes(first)) return first;
  return defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang] ?? ui[defaultLang];
  const t = (key: string): string => {
    return messages?.[key] ?? ui[defaultLang]?.[key] ?? key;
  };
  return { lang, messages, t };
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'km') return 'km';
  if (lang === 'zh') return 'zh-CN';
  return 'en';
}

export function buildAlternates(): Record<string, string> {
  const base = siteConfig.baseUrl;
  return {
    km: `${base}/km`,
    en: `${base}/en`,
    zh: `${base}/zh`,
    xDefault: `${base}/en`,
  };
}
