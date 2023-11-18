import PurpleButton from "@/components/Buttons/PurpleButton";
import Link from "next/link";
import Image from "next/image";

const BookCard = ({ title, image, author, sellingPrice, _id }) => {

    return (
        <div className="rounded-t-2xl rounded-b-xl bg-white shadow-2xl md:w-80 w-[300px]">
            <Image className="md:w-80 md:h-96 w-[300px] h-80 rounded-t-2xl" src={image} alt={title} width={200} height={50} />
            <div className="relative z-10 flex flex-col space-y-1 mt-1 p-2 h-[190px]">
                <p className="font-semibold text-xl">{title}</p>
                <p className="font-semibold">Author: <span className="font-normal">{author}</span></p>
                <p className="font-semibold">Price: <span className="font-normal">${sellingPrice}</span></p>
                <Link className="absolute bottom-2 w-full" href={`/store/${_id}`}><PurpleButton className="w-full">See Details</PurpleButton></Link>
            </div>
        </div>
    );
};

export default BookCard;