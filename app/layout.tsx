import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:       'i want to build a landing page for a real estate company...',
  description: 'i want to build a landing page for a real estate company... — site under construction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
