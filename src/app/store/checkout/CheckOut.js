"use client"
import { deleteCartItem } from '@/Redux/features/cart/cartSlice';
import TransparentButton from '@/components/Buttons/TransparentButton';
import React from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const CheckOut = () => {
    const dispatch = useDispatch();

    const handleCheckout = async () => {
        // if (!user) {
        //     toast.error('Please log in to complete checkout')
        //     return;
        // }else if(!user?.emailVerified) {
        //     toast.error('Your email is not verified. Please go to your profile and verify your email first',{
        //         duration: 7000
        //     })
        //     return;
        // }else {
        //     let success;
        //     for (let item of cartItems) {
        //         try {
        //             const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/user/${user?.email}`, item)
        //             if (response.data.acknowledged) {
        //                 success = 'Checkout successfully'
        //             }
        //             // console.log(response.data);
        //         } catch (error) {
        //             console.log(error.message);
        //         }
        //     }
            // localStorage.removeItem('cart')
            dispatch(deleteCartItem([]))
            toast.success('Check Out Successfully')
        
    }
    return (
        <TransparentButton onClick={handleCheckout} customClass='px-5 w-3/5 sm:w-52 md:w-48 md:px-10 flex flex-row items-center space-x-3'><p>CHECKOUT</p> <FaArrowRight/></TransparentButton>
    );
};

export default CheckOut;