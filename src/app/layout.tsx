import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feature Flag Configuration Card',
  description:
    'Production-ready feature flag configuration card component demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-3 focus:bg-indigo-700 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:ring-4 focus:ring-indigo-400"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
