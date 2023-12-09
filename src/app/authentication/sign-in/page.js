import TransparentButton from '@/components/Buttons/TransparentButton';
import Link from 'next/link';
import React from 'react';
import SignInForm from './SignInForm';
import { postUser } from '@/utils/user.service';

export const metadata = {
    title : "BookByte || Sign In"
}

const SignIn = () => {
    const postUserData = async (data) => {
        "use server"
        return await postUser(data)
    }
    return (
        <div className='bg-gray-25 w-11/12 md:w-4/5 lg:w-2/3 flex flex-col md:flex-row m-auto rounded-xl shadow-2xl mt-10 md:mt-20'>
            <SignInForm postUserData={postUserData}/>
            <div className='w-full md:w-1/2 bg-purple-500 flex flex-col space-y-5 justify-center items-center py-6 px-3 rounded-b-2xl md:rounded-r-2xl md:rounded-l-none'>
                <p className='text-white text-4xl md:text-7xl font-bold'>Create, Account!</p>
                <p className='text-white font-semibold text-sm md:text-base lg:text-lg'>If you have no any Account yet then please Sign Up</p>
                <Link href='/authentication/sign-up'><TransparentButton customClass='rounded-3xl px-5 text-white border-white hover:border-black hover:text-black'>SIGN UP</TransparentButton></Link>
            </div>
        </div>
    );
};

export default SignIn;