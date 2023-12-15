"use client"

import { addToCart } from '@/Redux/features/cart/cartSlice';
import TransparentButton from '@/components/Buttons/TransparentButton';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const AddToCart = ({ _id, price, image, title, customClass }) => {
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch();

    // console.log(state);
    const handleAddToCart = (event, _id, price, image, title) => {
        event.preventDefault();

        const cartData = { id: _id, quantity: 1, image: image, price: price, title: title };
        dispatch(addToCart(cartData))
        toast.success('Item added to cart')
    };

    return (
        <TransparentButton onClick={(e) => handleAddToCart(e, _id, price, image, title)} customClass={customClass}>Add to cart</TransparentButton>

    );
};

export default AddToCart;