import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import '@smastrom/react-rating/style.css'
import AuthProvider from '@/Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookByte - Buy, Sell, Rent, and Lend Books Online',
  description: 'BookByte is an online platform where people can Buy, Sell, Rent, and Lend books. Find a wide selection of genres and authors.',
  keywords: 'books, online bookstore, buy books, sell books, rent books, lend books, book platform',
  ogTitle: 'BookByte - Online Bookstore',
  ogDescription: 'Discover the joy of reading with BookByte. Buy, Sell, Rent, and Lend books with ease!',
  // Additional SEO metadata
  author: 'BookByte',
  robots: 'index, follow', // Specifies whether search engines should index and follow the links on the page
  canonical: 'https://bookbyte.vercel.app', // Canonical URL for the page
  ogType: 'website', // Type of content for Open Graph (website, article, etc.)
  // ogImage: 'https://yourwebsite.com/images/og-image.jpg', // URL to the Open Graph image
  // twitterCard: 'summary_large_image', // Type of Twitter card (summary, summary_large_image, etc.)
  // twitterCreator: '@yourtwitterhandle', // Twitter creator's handle
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster/>
        </AuthProvider>
      </body>
    </html>
  )
}
