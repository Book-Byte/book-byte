import Image from 'next/image'
import backgroundImage from '../../public/home/background-image.jpg'
import Link from 'next/link'
import {FaArrowRight} from 'react-icons/fa'
import Logo from '@/components/Logo/logo'


export const metadata = {
  title: 'Litloop || Home'
}

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center h-screen'>
      <Image className='blur-sm' src={backgroundImage} alt='Background Image' fill size='100vw' style={{objectFit : 'cover'}}/>
    <div className='flex flex-col justify-center items-center bg-purple-100 rounded-md p-5 lg:w-2/5 lg:h-1/4 z-10'>
      <div className='flex pb-5 mb-2 text-purple-800'>
        <p className='lg:text-5xl text-2xl flex flex-row items-center'>Welcome in <Logo/></p>
      </div>
      <div className='bg-purple-700 p-2 text-white rounded-md'>
        <Link className='flex flex-row items-center' href='/store'>Take me to the store <FaArrowRight className='ml-2'/></Link>
      </div>
    </div>
    </main>
  )
}
