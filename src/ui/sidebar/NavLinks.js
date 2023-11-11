import Link from "next/link";
import {HiHome, HiBookOpen, HiUserGroup, HiCog} from 'react-icons/hi'
import {HiRectangleStack, HiTruck, HiSquares2X2, HiCubeTransparent} from 'react-icons/hi2'

const links = [
  {name: 'Home', href: '/', icon: HiHome},
  {name: 'Books', href: '/store', icon: HiBookOpen},
  {name: 'Sell or Lend', href: '/store/sell-lend', icon: HiRectangleStack},
  {name: 'Track Order', href: '/store/track-order', icon: HiTruck},
  {name: 'Community', href: '/store/community', icon: HiUserGroup},
  {name: 'Settings', href: '/store/settings', icon: HiCog},
  {name: 'About', href: '/store/about', icon: HiSquares2X2},
  {name: 'Admin', href: '/store/admin', icon: HiCubeTransparent},
]


const NavLinks = () => {
    return (
        <>
        {
          links.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link 
                key={link.name}
                href = {link.href}
                className="flex items-center md:justify-start justify-center font-semibold bg-gray-50 md:bg-white hover:bg-purple-500 hover:text-white p-2 rounded-md">
                <IconComponent className="md:w-6 md:h-6"/>
                <p className="hidden md:flex ml-2">{link.name}</p>
              </Link>
            )
          })
        }
        </>
    );
};

export default NavLinks;