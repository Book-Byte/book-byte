import Rating from "@/components/Ratings/Rating";
import { getSingleBook } from "@/utils/books.service";
import Image from "next/image";

export const metadata = {
    title : "Litloop || Book Details"
}

const BookDetails = async ({params : {id}}) =>{
    const book = await getSingleBook(id)
    const {title, author, genre, firstPublish, description, status, condition, sellingPrice, image} = book;

    return (
        <div className="mt-24 flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start">
            <div className="w-full">
                <Image className="w-64" src={image} alt={title} width={100} height={50}/>
                <Rating/>
            </div>
            <div></div>
        </div>
    )
}

export default BookDetails;