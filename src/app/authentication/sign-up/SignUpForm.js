"use client"
import { createUserByEmailPassword, signInWithGoogle, updateUser } from '@/Firebase/FirebaseAuth';
import { createAccount, customError, googleLogin, listenToAuthChanges, startAuthAction } from '@/Redux/features/auth/authSlice';
import TransparentButton from '@/components/Buttons/TransparentButton';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';

const SignUpForm = ({ postUserData }) => {
    const dispatch = useDispatch()
    // const [error, setError] = useState('')
    const { userData, loading, error, success } = useSelector((state) => state.auth)
    if (userData !== null) {
        console.log(userData);
    }

    useEffect(() => {
        const handleAuthChanges = async () => {
            const unsubscribe = await dispatch(listenToAuthChanges());

            return () => {
                // Unsubscribe from authentication changes when the component unmounts
                unsubscribe();
            };
        };
        handleAuthChanges();
    }, [dispatch]);

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            dispatch(customError('password must be at least 6 characters'))
            return
        } else if (password !== confirmPassword) {
            dispatch(customError("password didn't matched"))
            return
        }

        const userDataForDatabase = { username: name, email: email }

        if (userData === null) {
            await createUserByEmailPassword(email, password)
                .then(result => {
                    const user = result.user;
                    updateUser(name)
                        .then(() => {
                            dispatch(createAccount({ email: user.email, name: user.displayName }))
                            toast.success('Account created successfully')
                            console.log('Account created successfully');
                        }).catch(err => {
                            console.log(err.message);
                            toast.error('An error occurred during update user profile')
                        })
                })
                .catch(err => {
                    console.log(err.message)
                    if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
                        dispatch(customError('This account already exists. Please login'))
                    }
                })
            await postUserData(userDataForDatabase)
        } else {
            dispatch(customError('You are already logged in'))
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
        <form onSubmit={handleSubmit} className='w-full md:w-1/2 bg-gray-50 flex flex-col justify-center space-y-3 items-center py-6 px-3 rounded-t-2xl md:rounded-r-2xl md:rounded-l-none'>
            <p className='text-black text-4xl font-bold'>Sign up</p>
            <div className='flex flex-row justify-evenly w-2/3'>
                <TransparentButton onClick={handleGoogleSignIn} customClass='rounded-full hover:border-[#406882] p-2'><FcGoogle className='w-6 h-6' /></TransparentButton>
                <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaFacebook className='w-6 h-6' /></TransparentButton>
                <TransparentButton customClass='rounded-full hover:border-[#406882] p-2'><FaGithub className='w-6 h-6' /></TransparentButton>
            </div>
            <p className='font-semibold'>or sign up using email, password</p>
            <div className='flex flex-col space-y-2 w-3/4'>
                <input type='text' name='name' placeholder='username' className='bg-purple-50 w-full py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                <input type='email' name='email' placeholder='email' className='bg-purple-50 w-full py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                <input type='password' name='password' placeholder='password' className='bg-purple-50 py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
                <input type='password' name='confirmPassword' placeholder='confirm password' className='bg-purple-50 py-3 px-5 rounded-3xl focus:outline-none placeholder:text-gray-900 text-black' required />
            </div>
            {
                // error.length > 0 && <p className='text-rose-900 text-sm'>{error}</p>
            }
            <TransparentButton type='submit' disabled={loading} customClass={`rounded-3xl px-6 py-3 text-white border-none bg-purple-500 w-3/4 hover:text-black`}>{loading ? 'Loading...' : 'SIGN UP'}</TransparentButton>
        </form>
    );
};

export default SignUpForm;