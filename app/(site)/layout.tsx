import React from 'react'
import Link from "next/link"
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider'
import '../globals.css'

export const metadata = {
  title: 'Alvaro Peña',
  description: 'Bio, projects, and essays.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-8">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-2xl">Alvaro Peña</Link>
            <div className='flex flex-row gap-6 items-center'>
              <Link href="/projects">Projects</Link>
              <Link href="/essays">Essays</Link>
              <a href='https://www.x.com/alvropenaa' className='text-2xl' target='_blank' rel='noopener noreferrer'>𝕏</a>
              <ModeToggle />
            </div>
          </header>
          <main className="h-screen w-screen">{children}</main>
          <footer>
            <p className='text-sm text-blue-500 text-right'> alvaro@pena.pe</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}