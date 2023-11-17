import GoTopButton from "@/components/Buttons/GoTopButton";
import Navbar from "@/ui/Navbar/Navbar";
import { searchBooks } from "@/utils/books.service";
import Link from "next/link";

export const metadata = {
    title : "Litloop - Buy or Rent Books",
    description : 'An Online Bookstore to Sell and Rent Used Books'
}

const BookStoreLayout = async ({ children }) => {

    const preload = async (char) =>{
        "use server"
       return await searchBooks(char)
    }

    return (
        <div className="flex flex-col justify-center items-center">

                <Navbar preload={preload}/>
                {children}
                <Link href="#navbar"><GoTopButton/></Link>
        </div>
    )
}

export default BookStoreLayout;