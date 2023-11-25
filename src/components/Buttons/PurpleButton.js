"use client"
import React from 'react';

const PurpleButton = ({children, className, type, onClick}) => {
    return (
        <button onClick={onClick} type={type} className={`${className} bg-purple-600 font-semibold text-white hover:text-gray-800 hover:bg-transparent px-3 py-2 rounded-lg`}>{children}</button>
    );
};

export default PurpleButton;