import '../globals.css'

export const metadata = {
  title: 'Alvaro Peña',
  description: 'Bio, projects and essays.',
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
