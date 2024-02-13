import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import '../globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Alvaro Peña',
  description: 'No description.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}