"use client";
import {Navbar as Nav } from "keep-react";
import Logo from "@/components/Logo/logo";
import { BiSearch } from 'react-icons/bi'
import Link from "next/link";
import { useState } from "react";
import PurpleButton from "@/components/Buttons/PurpleButton";

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <nav className="relative w-full"> <Nav className="flex fixed top-0 w-full bg-purple-50 py-3 ">
            <Nav.Container className="flex items-center relative justify-between w-full">
                <Nav.Container className="flex items-center md:py-4">
                    <Nav.Brand>
                        <p className="text-purple-500"><Logo /></p>
                    </Nav.Brand>
                    <Nav.Divider></Nav.Divider>
                    <Nav.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-6"
                    >
                        <Link className="hover:text-purple-600 font-semibold" href="/" >Home</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store" >Books</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store/sell-lend" >Sell or Lend</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store/track-order" >Track Order</Link>
                    </Nav.Container>
                    <Nav.Collapse collapseType="sidebar">
                        <Nav.Container tag="ul" className="flex flex-col gap-5">
                            <Link className="hover:text-purple-600 font-semibold" href="/" >Home</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store" >Books</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store/sell-lend" >Sell or Lend</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store/track-order" >Track Order</Link>
                        </Nav.Container>
                    </Nav.Collapse>
                </Nav.Container>

                <Nav.Container className="flex gap-4 items-center">
                    <div className='hidden md:flex relative border-2 border-gray-800 rounded-lg'>
                        <input className='p-2 w-full bg-transparent rounded-lg text-black placeholder:text-gray-700 focus:outline-none' type="text" name="search" placeholder='Search'/>
                        <BiSearch className='h-6 w-6 absolute right-0 m-2 text-gray-800 cursor-pointer' />
                    </div>
                    <BiSearch className="w-6 h-6 md:hidden flex cursor-pointer" onClick={() => setOpenSearch(!openSearch)} />
                    <Link href='/store/sign-in'><PurpleButton>Sign In</PurpleButton></Link>
                    <Nav.Toggle />
                </Nav.Container>
            </Nav.Container>
        </Nav>
            {
                openSearch && (
                    <div className="w-full flex md:hidden absolute top-13 px-4 py-2 bg-purple-50">
                        <input type="text" placeholder="Search" className="p-2 w-full border-b-2 border-purple-600 bg-transparent focus:outline-none" />
                    </div>
                )
            }
        </nav>
    );
}

export default Navbar;