// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '汉字学习 - Học chữ Hán',
  description: 'Khám phá thế giới chữ Hán một cách dễ dàng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js"></script>
        <script src="https://unpkg.com/pinyin-pro@3.20.1/dist/index.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
