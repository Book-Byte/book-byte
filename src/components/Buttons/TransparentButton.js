"use client"
import React from 'react';

const TransparentButton = ({children, type, customClass, onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled && disabled} type={type} className={`${customClass} mb-3 py-2 font-semibold border-[3px]`}>{children}</button>
    );
};

export default TransparentButton;