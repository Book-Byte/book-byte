import TransparentButton from "@/components/Buttons/TransparentButton";
import DynamicRating from "@/components/Ratings/DynamicRating";
import StaticRating from "@/components/Ratings/StaticRating";
import { getSingleBook } from "@/utils/books.service";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Litloop || Book Details"
}

const BookDetails = async ({ params: { id } }) => {
    const book = await getSingleBook(id)
    const { _id, title, author, genre, firstPublish, rating, description, status, condition, sellingPrice, image } = book;
    
    return (
        <div className="mt-10 md:mt-28 mb-10 md:mb-0 w-full flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start">
            <div className="md:w-1/3 w-full md:px-10 px-5 flex flex-col justify-center">
                <Image className="w-64 m-auto" src={image} alt={title} width={100} height={50} />
                <div className="flex flex-col mt-5">
                    <Link href={`/store/${_id}`} className="m-auto"><TransparentButton customClass="border-[#ADCBD7] w-64 rounded-full hover:border-[#406882] text-xl">Add to cart</TransparentButton></Link>
                    <Link href={`/store/${_id}`} className="m-auto"><TransparentButton customClass="border-[#ADCBD7] w-64 rounded-full hover:border-[#406882] text-xl">Lend this book</TransparentButton></Link>
                </div>
                <DynamicRating width={250} customClass='m-auto' />
                <p className="text-center mt-2 text-lg">Rate this book</p>
            </div>
            <div className="md:w-2/3 w-full md:px-10 px-5 mt-10 md:mt-0 flex flex-col items-start">
                <p className="font-bold text-3xl md:text-8xl">{title}</p>
                <p className="text-xl md:text-2xl font-serif">{author}</p>
                <div className="flex flex-row space-x-5 items-center">
                    <StaticRating customClass='space-x-4 md:space-x-2' width={200} value={rating} />
                    <p className="font-serif md:text-5xl text-2xl">{rating}</p>
                </div>
                <p className="mt-5 md:w-2/3 w-full">{description}</p>
                <p className="mt-5 text-gray-700">Genres: <span className="text-black font-semibold">{genre}</span></p>
                <p className="mt-2 text-gray-700">First Published in {firstPublish}</p>
                <p className="mt-2 text-gray-700">Available for {status.join('/')}</p>
                <p className="mt-2 text-gray-700">Condition: <span className="text-black">{condition}</span></p>
                <p className="mt-2 text-gray-700">Selling Price: <span className="text-black font-semibold">${sellingPrice}</span></p>
            </div>
        </div>
    )
}

export default BookDetails;