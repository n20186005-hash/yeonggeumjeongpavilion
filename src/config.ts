export const siteConfig = {
  name: 'Yeonggeumjeong Sunrise Pavilion',
  baseUrl: 'https://yeonggeumjeongpavilion.com',
  slug: 'yeonggeumjeong-pavilion',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
