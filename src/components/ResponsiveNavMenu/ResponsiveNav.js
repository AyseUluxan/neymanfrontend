import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import logo from '../../assets/images/logo/neymanlogo.png'
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md"
import { MdOutlineMail } from "react-icons/md";


const ResponsiveMenu = ({ showMenu

}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white h-screen xl:w-[25%] 2xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[70%] w-[83%]  flex-col justify-between transition-all duration-700 xl:pt-50 2xl:pt-50 shadow-xl`}>
      <div className='card responsive-nav'>

        {/* Links */}
        <nav className='xl:hidden 2xl:hidden lg:hidden'>
          <ul className='pt-50 px-20 '>

            <li className='h-60'>
              <NavLink to='/About' className=' text-18 hover:text-medium-blue transition-all duration-300'>Haqqımızda</NavLink>
            </li>
            <li className='h-60'>
              <NavLink to='/Xidmətlər' className=' text-18 flex items-center gap-2 hover:text-medium-blue transition-all duration-300 '>Xidmətlər <FaChevronDown /></NavLink>
            </li>
            <li className='h-60'>
              <NavLink to='/Layihələr' className=' text-18 flex items-center gap-2 hover:text-medium-blue transition-all duration-300'>Layihələr <FaChevronDown /></NavLink>
            </li>
            <li className='h-60'>
              <NavLink to='/Bloq' className=' text-18 flex items-center gap-2 hover:text-medium-blue transition-all duration-300'>Bloq <FaChevronDown /></NavLink>
            </li>
            <li className='h-60'>
              <NavLink to='/Contact' className=' text-18 hover:text-medium-blue transition-all duration-300'>Əlaqə</NavLink>
            </li>
          </ul>
        </nav>
        <div className='pt-20 px-20 '>
          <img src={logo} className='h-150 md:hidden sm:hidden xs:hidden xxs:hidden ' alt='logo' />
          <div className='flex items-center gap-4 pt-20'>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <FaMapLocationDot className=' text-30' />
            </div>
            <p className=''>Yalova , Termal yolu Akköy.</p>

          </div>

          <div className='flex items-center gap-4 pt-30 '>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <MdOutlinePhoneIphone className=' text-30' />
            </div>
            <p className=''>+994 50 631 07 22</p>

          </div>

          <div className='flex items-center gap-4 pt-30'>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <MdOutlineMail className=' text-30' />
            </div>
            <p className=''>info.neyman.e.t@gmail.com</p>

          </div>

          <div className='flex gap-10 xs:gap-3 xxs:gap-3 pt-50 responsive-nav-icon'>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <a href='#/'><FaFacebookF className='text-22 '/></a>
            </div>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <a href='#/'><FaTwitter className='text-22 '/></a>
            </div>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'>
              <a href='#/'><FaInstagram className='text-22 '/></a>
            </div>
            <div className='border border-black rounded-full p-15 xs:p-10 xxs:p-10'><a href='#/'><FaLinkedinIn className='text-22 '/></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu