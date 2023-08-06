import '../globals.css'

export const metadata = {
  title: 'Alvaro Peña',
  description: 'Generated by Next + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
