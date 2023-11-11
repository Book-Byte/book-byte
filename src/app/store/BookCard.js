import PurpleButton from "@/components/Buttons/PurpleButton";
import Link from "next/link";

const BookCard = ({ data }) => {
    const { title, image, author, sellingPrice, _id } = data
    return (
        <div className="rounded-t-2xl rounded-b-xl bg-white shadow-2xl md:w-80 w-72">
            <img className="md:w-80 md:h-96 w-72 h-80 rounded-t-2xl" src={image} alt={title} />
            <div className="flex flex-col space-y-1 mt-1 p-2">
                <p className="font-semibold text-xl">{title}</p>
                <p className="font-semibold">Author: <span className="font-normal">{author}</span></p>
                <p className="font-semibold">Price: <span className="font-normal">${sellingPrice}</span></p>
                <Link href={`/store/${_id}`}><PurpleButton children="See Details" className="w-full"/></Link>
            </div>
        </div>
    );
};

export default BookCard;