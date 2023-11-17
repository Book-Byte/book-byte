import Navbar from "@/ui/Navbar/Navbar";
// import NavbarComponent from "@/ui/Navbar/Navbar";

export const metadata = {
    title : "Litloop - Buy or Rent Books",
    description : 'An Online Bookstore to Sell and Rent Used Books'
}

const BookStoreLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="flex md:flex-row flex-col items-center md:items-start md:px-3 px-0 w-full"> */}
                {/* <Sidebar/> */}
                <Navbar/>
                {children}
            {/* </div> */}
        </div>
    )
}

export default BookStoreLayout;