"use client"
import { Dropdown, Navbar as Nav } from "keep-react";
import Logo from "@/components/Logo/logo";
import { BiSearch } from 'react-icons/bi'
import Link from "next/link";
import { useState } from "react";
import PurpleButton from "@/components/Buttons/PurpleButton";
import SearchCard from "../Cards/SearchCard";
import { revalidatePath } from "next/cache";
import { useDispatch, useSelector } from "react-redux";
import { listenToAuthChanges } from "@/Redux/features/auth/authSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { signOutUser } from "@/Firebase/FirebaseAuth";
import { customClassForDropDown, customClassForDropDownItem } from "@/Constants/Constants";
import { usePathname } from "next/navigation"
import Cart from "@/components/Cart/ShopingCart";
import ShopingCart from "@/components/Cart/ShopingCart";

const Navbar = ({ preload, getUserByEmail }) => {
    const pathname = usePathname();
    const [openSearch, setOpenSearch] = useState(false)
    const [openSearchData, setOpenSearchData] = useState(false)
    const [searchData, setSearchData] = useState([])
    const [errorMessage, setErrorMessage] = useState(<></>)
    const { userData } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const handleSearch = async (text) => {
        try {
            const searchData = await preload(text);
            setOpenSearchData(searchData.length > 0);
            setSearchData(text.length > 0 ? searchData : []);
            setErrorMessage(searchData.length === 0 && text.length > 0 ? <p className="text-black font-semibold text-lg">Not found</p> : <></>);
        } catch (error) {
            console.error("Error while searching:", error);
        }
    };
    useEffect(() => {
        const handleAuthChanges = () => {
            const unsubscribe = dispatch(listenToAuthChanges());

            return () => {
                unsubscribe();
            };
        };
        handleAuthChanges();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    const handleSignOut = async () => {
        await signOutUser()
            .then(() => {
                toast.success('sign out successfully')
            })
            .catch(err => {
                console.log(err.message);
                toast.error('sign out failed')
            })
    }

    return (
        <nav id="navbar" className="relative w-full"> <Nav className="flex w-full bg-purple-200 py-3 ">
            <Nav.Container className="flex items-center relative justify-between w-full">
                <Nav.Container className="flex items-center md:py-4">
                    <Nav.Brand>
                        <Link href='/store'><p className="text-purple-500"><Logo /></p></Link>
                    </Nav.Brand>
                    <Nav.Divider></Nav.Divider>
                    <Nav.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-6"
                    >
                        <Link className={`hover:text-purple-600 font-semibold ${pathname === '/' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/" >Home</Link>
                        <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store" >Books</Link>
                        <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store/sell-lend' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store/sell-lend" >Sell or Lend</Link>
                        <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store/track-order' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store/track-order" >Track Order</Link>
                    </Nav.Container>
                    <Nav.Collapse collapseType="sidebar">
                        <Nav.Container tag="ul" className="flex flex-col gap-5">
                            <Link className={`hover:text-purple-600 font-semibold ${pathname === '/' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/" >Home</Link>
                            <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store" >Books</Link>
                            <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store/sell-lend' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store/sell-lend" >Sell or Lend</Link>
                            <Link className={`hover:text-purple-600 font-semibold ${pathname === '/store/track-order' ? 'border-b-2 border-b-purple-500 text-purple-500' : ''}`} href="/store/track-order" >Track Order</Link>
                        </Nav.Container>
                    </Nav.Collapse>
                </Nav.Container>

                <Nav.Container className="flex gap-4 items-center">
                    <Link href='/store/checkout'><ShopingCart /></Link>
                    <div className='hidden md:flex relative border-2 border-gray-800 rounded-lg'>
                        <input onChange={(e) => handleSearch(e.target.value)} className='p-2 w-full bg-transparent rounded-lg text-black placeholder:text-gray-700 focus:outline-none' type="text" name="search" placeholder='Search' />
                        <BiSearch className='h-6 w-6 absolute right-0 m-2 text-gray-800 cursor-pointer' />
                    </div>
                    <BiSearch className="w-6 h-6 md:hidden flex cursor-pointer" onClick={() => setOpenSearch(!openSearch)} />
                    {
                        userData === null ? <Link href='/authentication/sign-in'><PurpleButton>Sign In</PurpleButton></Link> : <Dropdown
                            label={userData?.name.split(' ')[0]}
                            className={customClassForDropDown}
                            size=""
                            trigger="hover"
                            type=""
                        >
                            <Dropdown.Item className={customClassForDropDownItem}>Profile</Dropdown.Item>
                            <Dropdown.Item className={customClassForDropDownItem}>Dashboard</Dropdown.Item>
                            <Dropdown.Item className={customClassForDropDownItem} onClick={handleSignOut}>Sign out</Dropdown.Item>
                        </Dropdown>
                    }
                    <Nav.Toggle />
                </Nav.Container>
            </Nav.Container>
        </Nav>
            {
                openSearch && (
                    <div className="w-full flex md:hidden absolute top-13 px-4 py-2 bg-purple-200">
                        <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Search" className="p-2 w-full border-b-2 border-purple-600 bg-transparent focus:outline-none" />
                    </div>
                )
            }
            {
                openSearch && searchData && (
                    <div className={`w-full top-[115px] md:hidden grid grid-cols-1 gap-3 ${searchData.length > 3 ? 'overflow-y-auto h-80' : ''} absolute px-4 py-2 bg-purple-200`}>
                        {
                            errorMessage.props.children || searchData.map(data => <Link key={data._id} onClick={() => {
                                handleSearch('')
                                setOpenSearch(false)
                            }} className="cursor-pointer" href={`/store/${data._id}`}> <SearchCard image={data.image} title={data.title} author={data.author} /></Link>)
                        }
                    </div>
                )
            }
            {
                openSearchData && (
                    <div className={`w-full hidden md:grid grid-cols-5 gap-3 ${searchData.length > 12 ? 'overflow-y-auto h-80' : ''} absolute top-13 px-4 py-2 bg-purple-200`}>
                        {
                            errorMessage.props.children || searchData.map(data => <Link key={data._id} onClick={() => {
                                handleSearch('')
                                setOpenSearchData(false)
                                revalidatePath(`/store/${data._id}`, 'page')
                            }} className="cursor-pointer" href={`/store/${data._id}`}> <SearchCard image={data.image} title={data.title} author={data.author} /></Link>)
                        }
                    </div>
                )
            }
        </nav>
    );
}

export default Navbar;