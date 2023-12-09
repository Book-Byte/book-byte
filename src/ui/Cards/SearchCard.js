"use client"
import Image from "next/image";

const SearchCard = ({image, title, author}) => {

    return (
        <div className="flex flex-row space-x-4 p-2 bg-white rounded-md m-2 items-center w-full md:w-72">
            <Image src={image} width={80} height={80} alt={title}/>
            <div className="flex flex-col items-start">
                <p className="font-bold text-lg md:text-xl">{title}</p>
                <p className="font-semibold text-gray-800">By {author}</p>
            </div>
        </div>
    );
};

export default SearchCard;