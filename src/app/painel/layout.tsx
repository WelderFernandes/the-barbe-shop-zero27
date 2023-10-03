import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { LeftMenu } from './components/leftMenu'
import { RightMenu } from './components/rightMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard Barber Shop',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-1 bg-white">
          <LeftMenu />
          <div className="mx-auto flex w-full flex-1 flex-col">
            <Header />
            <div className="mx-6 my-3 h-full">{children}</div>
          </div>
          <RightMenu />
        </section>
      </body>
    </html>
  )
}
