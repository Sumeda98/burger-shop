
import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface props {

    showNav:boolean;
    closeNav:()=>void;
}

function MobileNav( {showNav,closeNav}:props ) {

    const navStyle = showNav ? "translate-x-0":"translate-x-[-100%]";

    return (
        <div className={`fixed ${navStyle} right-0 transition-all duration-50 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
            <ImCross onClick={closeNav} className='cursor-pointer absolute top-[2rem] right-[2rem] w-[1.5rem] h-[1.5rem] text-white' />
            {/* ---------nav-div---------- */}
            <div className={`bg-emerald-700 ${navStyle} transition-all duration-400 delay-100 flex flex-col items-center justify-center w-[70%] h-[100%]`}>
            {/*--------------nav-links------------------*/}
            <ul className='space-y-6'>
                <li className='text-[18px] font-medium hover:text-yellow-300 text-white'>
                    <Link href='/home'>Home</Link>
                </li>
                <li className='text-[18px] font-medium hover:text-yellow-300  text-white'>
                    <Link href='/home'>Shop</Link>
                </li>
                <li className='text-[18px] font-medium hover:text-yellow-300  text-white'>
                    <Link href='/home'>Menu</Link>
                </li>
                <li className='text-[18px] font-medium hover:text-yellow-300  text-white'>
                    <Link href='/home'>Blog</Link>
                </li>
                <li className='text-[18px] font-medium hover:text-yellow-300  text-white'>
                    <Link href='/home'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default MobileNav