import localFont from 'next/font/local';

export const display = localFont({
  src: [
    { path: '../../public/fonts/supreme-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/supreme-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const body = localFont({
  src: [
    { path: '../../public/fonts/switzer-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/switzer-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: false,
});

export const mono = localFont({
  src: [{ path: '../../public/fonts/azeretmono-400-normal.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});
