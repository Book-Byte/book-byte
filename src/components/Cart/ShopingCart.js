import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCart } from "phosphor-react";

const ShopingCart = () => {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <div className="relative">
        <ShoppingCart size={30} className="text-white"/>
        <p className={`text-base rounded-full text-black text-center font-semibold absolute p-1 -top-4 -right-1`}>{cartItems.length > 0 ? cartItems.length : 0}</p>
        </div>
    );
};

export default ShopingCart;