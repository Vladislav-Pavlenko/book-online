import type { Metadata } from 'next'
import { DM_Sans, Quicksand } from 'next/font/google'
import './globals.css'
import './reset.css'
import Header from '@/app/components/Header'

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: '400',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Book online',
  description: 'Read your favorite book online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dm_sans} ${quicksand} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
