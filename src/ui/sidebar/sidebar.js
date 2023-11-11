import Logo from '@/components/Logo/logo';
import Link from 'next/link';
import React from 'react';
import NavLinks from './NavLinks';
import { HiArrowLeftOnRectangle } from 'react-icons/hi2'

const Sidebar = () => {
    return (
        <div className="flex flex-col md:py-4 md:px-6 md:bg-gray-50 md:h-screen w-full md:w-2/12">
            <Link className="mb-2 flex h-20 items-end justify-start md:rounded-md text-white bg-purple-600 p-4 md:h-30" href="/store">
                <div className="">
                    <Logo />
                </div>
            </Link>
            <div className="flex flex-wrap gap-2 md:grow flex-row space-x-2 md:flex-col ml-1 md:space-x-0 md:space-y-2">
                <NavLinks />
                <button className="flex items-center md:justify-start justify-center font-semibold bg-gray-50 md:bg-white hover:bg-purple-500 hover:text-white p-2 rounded-md">
                    <HiArrowLeftOnRectangle className="md:w-6 md:h-6" />
                    <div className="hidden md:flex ml-2 font-semibold">Sign Out</div>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;