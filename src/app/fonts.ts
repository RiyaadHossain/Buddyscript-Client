import localFont from 'next/font/local';

export const mySans = localFont({
  src: [
    {
      path: '../public/assets/fonts/MySans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/MySans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/MySans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/MySans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-my-sans',
  display: 'swap',
});
