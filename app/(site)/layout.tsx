import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import '../globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

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
          <Header />
          <main className="h-screen w-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}