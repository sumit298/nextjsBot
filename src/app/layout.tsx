import ChatBot from './components/Chatbot'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookBro',
  description: 'Your Bookstore for fantasy and mystery novels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChatBot/>
        {children}</body>
    </html>
  )
}
