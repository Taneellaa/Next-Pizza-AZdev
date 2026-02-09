import type { Metadata } from 'next';
import { Header } from '../components/shared/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dodo Pizza | created by artemy.dev',
  description: 'Website was created by artemy.dev, enjoy!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
