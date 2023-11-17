"use client"
import React from 'react';

const TransparentButton = ({children, customClass}) => {
    return (
        <button className={`${customClass} mb-3 py-2 font-semibold border-[3px]`}>{children}</button>
    );
};

export default TransparentButton;