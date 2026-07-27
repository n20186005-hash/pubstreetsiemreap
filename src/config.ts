// Central configuration for the Pub Street Siem Reap guide.
// Domain is resolved once here and reused by astro.config, BaseLayout (SITE/JSON-LD)
// and the language alternates so it never has to be hard-coded in multiple places.

// Google Analytics 4 tracking id (gtag.js).
// Leave this empty to disable analytics entirely.
export const GA_MEASUREMENT_ID = 'G-HXM22WWPKP';

export const siteConfig = {
  name: 'Pub Street',
  nameLocal: 'ផាប់ស្ទ្រីត ក្រុងសៀមរាប',
  defaultLang: 'km' as const,
  languagesList: ['km', 'en', 'zh'] as const,
  locale: 'km',

  resolveBaseUrl(): string {
    const env =
      (typeof process !== 'undefined' && process.env && process.env.CURRENT_SITE_DOMAIN) ||
      (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.CURRENT_SITE_DOMAIN);
    const fallback = 'https://pubstreet-siemreap.com';
    let base = (env || fallback).toString().trim().replace(/\/+$/, '');
    if (!/^https?:\/\//.test(base)) base = 'https://' + base;
    return base;
  },
  get baseUrl(): string {
    return this.resolveBaseUrl();
  },
};

// Pub Street sits just off Street 08 in central Siem Reap, near the Old Market (Phsar Chas).
// Coordinates reflect the heart of the pedestrian nightlife zone.
export const mapsUrl = 'https://maps.app.goo.gl/SyrmDeMYGeWN3JWNA';
export const mapsEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1998737.7052862055!2d103.0606929!3d11.9200747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110178b87eece53%3A0xdba9f9bc6565d20f!2sPub%20Street!5e0!3m2!1szh-CN!2sus!4v1785131894045!5m2!1szh-CN!2sus';

export const attraction = {
  name: {
    en: 'Pub Street',
    km: 'ផាប់ស្ទ្រីត ក្រុងសៀមរាប',
    zh: '暹粒酒吧街',
  },
  lat: 13.3531,
  lng: 103.8562,
  rating: 4.4,
  reviews: 7182,
  address: {
    streetAddress: 'Street 08',
    addressLocality: 'Krong Siem Reap',
    addressCountry: 'KH',
  },
  openingHours: 'Mo-Su 00:00-23:59',
};
