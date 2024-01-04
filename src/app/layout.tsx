import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rick and Morty - Descubre el Universo de Rick and Morty con Next.js',
  description: 'Explora la serie Rick and Morty a través de esta aplicación construida con Next.js. Obtén información detallada sobre los personajes, y clasifícalos fácilmente según su especie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} mx-auto max-w-5xl`}>{children}</body>
    </html>
  )
}
