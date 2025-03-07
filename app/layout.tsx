import '~/lib/style/globals.css';

import { font } from '~/lib/font';
import { cn } from '~/lib/style/utils';

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
