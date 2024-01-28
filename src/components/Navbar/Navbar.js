import React, { useState } from 'react'
import logo from '../../assets/images/logo/neymanlogo.png'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import ResponsiveMenu from '../ResponsiveNavMenu/ResponsiveNav'
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-scroll'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const togglemenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav className='shadow-md'>
            <div className='px-50 md:px-20 sm:px-20 xs:px-20 xxs:px-20'>
                <div className='flex items-center justify-between'>
                    <div>
                        <NavLink to='/'><img src={logo} className='h-100' alt='logo' /></NavLink>

                    </div>
                    <div className='md:hidden sm:hidden xs:hidden xxs:hidden'>
                        <ul className='flex items-center gap-16'>

                            <li>
                                <NavLink to='/About' className='font-semibold text-18 hover:text-medium-blue transition-all duration-300'>Haqqımızda</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Services' className='font-semibold text-18 flex items-center gap-2 hover:text-medium-blue transition-all duration-300'>Xidmətlər <FaChevronDown /></NavLink>
                            </li>
                            <li>
                                <Link activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={700} className='font-semibold text-18 hover:text-medium-blue transition-all duration-300'>Layihələr</Link>
                            </li>
                            <li>
                                <NavLink to='/Blog' className='font-semibold text-18 hover:text-medium-blue transition-all duration-300'>Bloq</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Contact' className='font-semibold text-18 hover:text-medium-blue transition-all duration-300'>Əlaqə</NavLink>
                            </li>

                        </ul>
                    </div>

                    {/* Mobile Hamburger menu */}
                    {showMenu ? (
                        <HiMenuAlt1
                            onClick={togglemenu}
                            size={30}
                            className="cursor-pointer 
                            transition-all "/>
                    ) : (
                        <HiMenuAlt3
                            onClick={togglemenu}
                            size={30}
                            className="cursor-pointer 
                            transition-all "/>
                    )
                    }
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} />
        </nav>
    )
}

export default Navbar