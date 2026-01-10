import type { Metadata } from 'next';
import { DM_Sans, Quicksand } from 'next/font/google';
import './reset.css';
import './globals.css';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Book online',
  description:
    '"Book Online – Your Ultimate Digital Library." Discover, read, and organize your favorite books in one seamless platform. Dive into stories anytime, anywhere.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans} ${quicksand} antialiased`}>{children}</body>
    </html>
  );
}
