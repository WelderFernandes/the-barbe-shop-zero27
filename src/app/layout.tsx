import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="min-h-screen h-auto m-auto max-w-[425px] min-w-[410px] bg-[#F1F1F1] overflow-hidden">
          {children}
        </section>
      </body>
    </html>
  )
}
