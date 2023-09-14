import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto({ 
  weight: ['100', '300', '400', '500', '700', '900'], 
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Flight Tracker',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50 text-slate-950 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
