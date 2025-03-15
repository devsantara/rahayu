import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';

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
