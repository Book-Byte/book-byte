import TransparentButton from '@/components/Buttons/TransparentButton';
import Link from 'next/link';
import React from 'react';
import SignUpForm from './SignUpForm';
import { postUser } from '@/utils/user.service';
import axios from 'axios';

export const metadata = {
    title: "BookByte || Sign Up"
}

const SignUp = () => {

    const postUserData = async (data) => {
        "use server"
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, data)
            return response.data;
           } catch (error) {
            console.log(error.message);
           }
    }

    return (
        <div className='bg-gray-25 w-11/12 md:w-4/5 lg:w-2/3 flex flex-col-reverse md:flex-row m-auto rounded-xl shadow-2xl mt-5 md:mt-20 md:h-[500px]'>
            <div className='w-full h-48 md:h-full md:w-1/2 bg-purple-500 flex flex-col space-y-5 justify-center items-center py-6 px-3 rounded-b-2xl md:rounded-l-2xl md:rounded-r-none'>
                <p className='text-white text-4xl md:text-6xl font-bold'>Sign in</p>
                <p className='text-white font-semibold text-sm md:text-base lg:text-lg'>If you have already an account then please sign in</p>
                <Link href='/authentication/sign-in'><TransparentButton customClass='rounded-3xl px-5 text-white border-white hover:border-black hover:text-black'>SIGN IN</TransparentButton></Link>
            </div>
            <SignUpForm postUserData={postUserData} />
        </div>
    );
};

export default SignUp;