"use client";
import { Navbar } from "keep-react";
import Logo from "@/components/Logo/logo";
import { BiSearch } from 'react-icons/bi'
import Link from "next/link";
import { useState } from "react";
import PurpleButton from "@/components/Buttons/PurpleButton";

const NavbarComponent = () => {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <nav className="relative w-full"> <Navbar className="flex w-full bg-purple-50 py-3 ">
            <Navbar.Container className="flex items-center relative justify-between w-full">
                <Navbar.Container className="flex items-center md:py-4">
                    <Navbar.Brand>
                        <p className="text-purple-500"><Logo /></p>
                    </Navbar.Brand>
                    <Navbar.Divider></Navbar.Divider>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-6"
                    >
                        <Link className="hover:text-purple-600 font-semibold" href="/" >Home</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store" >Books</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store/sell-lend" >Sell or Lend</Link>
                        <Link className="hover:text-purple-600 font-semibold" href="/store/track-order" >Track Order</Link>
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <Link className="hover:text-purple-600 font-semibold" href="/" >Home</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store" >Books</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store/sell-lend" >Sell or Lend</Link>
                            <Link className="hover:text-purple-600 font-semibold" href="/store/track-order" >Track Order</Link>
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container className="flex gap-4 items-center">
                    <div className='hidden md:flex relative border-2 border-gray-800 rounded-lg'>
                        <input className='p-2 w-full bg-transparent rounded-lg text-black placeholder:text-gray-700 focus:outline-none' type="text" name="search" placeholder='Search'/>
                        <BiSearch className='h-6 w-6 absolute right-0 m-2 text-gray-800 cursor-pointer' />
                    </div>
                    <BiSearch className="w-6 h-6 md:hidden flex cursor-pointer" onClick={() => setOpenSearch(!openSearch)} />
                    <Link href='/store/sign-in'><PurpleButton children="Sign In"/></Link>
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
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

export default NavbarComponent;