"use client"
import React from 'react'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import { ModeToggle } from '../components/mode-toggle';
import { ThemeProvider } from '../components/theme-provider'
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
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="">Alvaro Peña</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline">{page.title}</Link>
            ))}
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/essays">Essays</Link>
          <ModeToggle />
        </header>
        <ThemeProvider>
          <main className="py-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
