import './globals.css'
import type { Metadata } from 'next'
import {Roboto } from 'next/font/google'


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
    <html lang="en" style={{ 
      height:"100%",
      margin:"0",
      // backgroundImage: `url('./sky.jpg')`,
      // backgroundSize:"cover",
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "center"
    }}>
      <body className={`${roboto.className} text-slate-950 mx-auto p-4 container`}>{children}</body>
    </html>
  )
}
