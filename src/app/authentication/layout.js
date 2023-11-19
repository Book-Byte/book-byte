import CustomProvider from '@/Redux/CustomProvider';
import GoTopButton from '@/components/Buttons/GoTopButton';
import Navbar from '@/ui/Navbar/Navbar';
import { searchBooks } from '@/utils/books.service';
import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const AuthenticationLayout = async ({ children }) => {
    const preload = async (char) => {
        "use server"
        return await searchBooks(char)
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar preload={preload} />
            {/* <CustomProvider> */}
                {children}
                <Link href='#navbar'><GoTopButton /></Link>
                <Toaster/>
            {/* </CustomProvider> */}
        </div>
    );
};

export default AuthenticationLayout;