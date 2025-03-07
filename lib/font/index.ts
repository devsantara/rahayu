import localFont from 'next/font/local';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const SatoshiSans = localFont({
  src: './satoshi-variable.woff2',
  variable: '--font-satoshi',
  display: 'swap',
  style: 'normal',
});

export const font = {
  display: SatoshiSans,
  sans: GeistSans,
  mono: GeistMono,
};
