"use client"
import Link from 'next/link';
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoTopButton = () => {

  return (
    <button className='bg-purple-600 p-3 rounded-full text-white fixed bottom-8 right-5 md:hidden'><FaArrowUp /></button>
  );
};

export default GoTopButton;