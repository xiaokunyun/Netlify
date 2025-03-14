import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed  px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-centerz-50'>
        <a href="#top"> 
          <Image src={assets.logo} alt="logo" className='w-28 cursor-pointer mr-14' />
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 '>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-3 py-2.5 rounded-full border border-gtay-500 ml-4'>
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className='w-3' />    
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
