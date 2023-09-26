import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Suivi PTF',
  description: 'Application web de suivi des étudiants dans le cadre du PTF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
