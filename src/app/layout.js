import { Inter } from 'next/font/google'
import './globals.css'
import '@smastrom/react-rating/style.css'
import CustomProvider from '@/Redux/CustomProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Litloop',
  description: 'An Online Bookstore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          {children}
        </CustomProvider>
      </body>
    </html>
  )
}
