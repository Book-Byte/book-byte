import { getAllBooks } from '@/utils/books.service';
import React from 'react';
import BookCard from './BookCard';

export const metadata = {
    title: 'Litloop || Store'
  }

const Store = async () => {
    const allBooks = await getAllBooks()

    // console.log(allBooks);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 md:p-7 bg-white'>
            {
                allBooks.map(book => (
                    <BookCard key={book._id} data={book}/>
                ))
            }
        </div>
    );
};

export default Store;