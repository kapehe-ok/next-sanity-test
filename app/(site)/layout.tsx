import React from 'react'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider'
import '../globals.css'

export const metadata = {
  title: 'Alvaro Peña',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages();


  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-3">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-xl">Alvaro Peña</Link>
            <div className='flex flex-row gap-6 items-center'>
              <Link href="/projects">Projects</Link>
              <Link href="/essays">Essays</Link>
              <a href='https://www.x.com/alvropenaa' className='text-2xl'>𝕏</a>
              <ModeToggle />
            </div>
          </header>
          <main className="">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

{/* <div className="flex items-center gap-5 text-sm text-gray-600">
              {pages.map((page) => (
                <Link key={page._id} href={`/${page.slug}`} className="hover:underline bg-red-200">{page.title}</Link>
              ))}
            </div> */}