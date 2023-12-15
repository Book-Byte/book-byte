import GoTopButton from "@/components/Buttons/GoTopButton";
import Footer from "@/ui/Footer/Footer";
import Navbar from "@/ui/Navbar/Navbar";
import { searchBooks } from "@/utils/books.service";
import { getUser } from "@/utils/user.service";
import axios from "axios";
import Link from "next/link";

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

const BookStoreLayout = async ({ children }) => {


    const preload = async (char) => {
        "use server"
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/all-books`, char)
            return response.data
        } catch (error) {
            console.log(error.message);
        }
    }
    const getUserByEmail = async (email) => {
        "use server"
       try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${email}`)
        return response.data;
       } catch (error) {
        console.log(error.message);
       }
    }

    return (
        <div className="flex flex-col justify-center items-center">

            <Navbar preload={preload} getUserByEmail={getUserByEmail} />
            {children}
            <Link href="#navbar"><GoTopButton /></Link>
            <Footer />
        </div>
    )
}

export default BookStoreLayout;