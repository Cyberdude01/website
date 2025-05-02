import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Website',
  description: 'Welcome to my website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
} 