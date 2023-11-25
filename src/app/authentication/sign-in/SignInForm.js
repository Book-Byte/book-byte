"use client"
import { signInByEmailPassword, signInWithGoogle } from '@/Firebase/FirebaseAuth';
import { login, customError, listenToAuthChanges, googleLogin, startAuthAction } from '@/Redux/features/auth/authSlice';
import TransparentButton from '@/components/Buttons/TransparentButton';
import Link from 'next/link';
import React, { use } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';

const SignInForm = ({postUserData}) => {
    const { userData, loading } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const handleAuthChanges = () => {
            const unsubscribe = dispatch(listenToAuthChanges());

            return () => {
                // Unsubscribe from authentication changes when the component unmounts
                unsubscribe();
            };
        }

        handleAuthChanges();

    }, [dispatch]);

    const handleSubmit = async event => {
        dispatch(startAuthAction())
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (userData === null) {
            try {
                const result = await signInByEmailPassword(email, password);
                const user = result.user;
                dispatch(login({ email: user.email, name: user.displayName }));
                toast.success('Log in successfully');
                console.log('Log in successfully');
            } catch (err) {
                dispatch(customError(err.message));
                console.log(err.message);
            }
        } else {
            toast.error('You already logged in with this account');
            return;
        }

    }

    const handleGoogleSignIn = async () => {
        dispatch(startAuthAction())
        try {
            await signInWithGoogle()
            .then(async result => {
                const user = result.user;
                const userData = {userName: user.displayName, email: user.email}
                dispatch(googleLogin({email: user.email, name : user.displayName}))
                await postUserData(userData)
                toast.success('Login successfully')
            })
            .catch(error => {
                toast.error('An error occurred during sign in with google')
                console.log(error.message);
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-gray-50 flex flex-col justify-center space-y-3 items-center py-6 px-3 rounded-t-2xl md:rounded-l-2xl md:rounded-r-none'>
            <p className='text-black text-4xl font-bold'>Sign in</p>
            <div className='flex flex-row justify-evenly w-2/3'>
                <TransparentButton onClick={handleGoogleSignIn} customClass='rounded-full hover:border-[#406882] p-2'><FcGoogle className='w-6 h-6' /></TransparentButton>
                <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaFacebook className='w-6 h-6' /></TransparentButton>
                <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaGithub className='w-6 h-6' /></TransparentButton>
            </div>
            <p className='font-semibold'>or sign in using email, password</p>
            <div className='flex flex-col space-y-2 w-3/4'>
                <input type='email' name='email' placeholder='email' className='bg-purple-50 w-full py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                <input type='password' name='password' placeholder='password' className='bg-purple-50 py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
            </div>
            <Link href='/authentication/sign-in'><p className='font-semibold hover:text-purple-600 hover:underline'>Forgot your password?</p></Link>
            <TransparentButton type='submit' disabled={loading} customClass='rounded-3xl px-6 py-3 text-white border-none bg-purple-500 w-2/3 hover:text-black'>{loading ? 'Loading...' : "SIGN IN"}</TransparentButton>
        </form>
    );
};

export default SignInForm;