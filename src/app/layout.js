import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import '@smastrom/react-rating/style.css'
import AuthProvider from '@/Providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookByte',
  description: 'BookByte is an online platform where people can Buy, Sell, Rent, Lend books.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
