import '~/styles/globals.css';

import * as React from 'react';

import { font } from '~/styles/fonts';
import { cn } from '~/styles/utils';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        font.display.variable,
        font.sans.variable,
        font.mono.variable,
        'antialiased',
      )}
    >
      <body>{children}</body>
    </html>
  );
}
