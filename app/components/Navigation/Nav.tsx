import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { FaBurger } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface props {
    openNav :()=> void;
}

function Nav({openNav}:props) {
  return (
    <div className='h-[12vh] bg-white border-b-2 border-b-black-50'>
        <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] item-center justify-between'>
            {/*--------------logo----------------------*/}
            <div className='flex items-center space-x-2'>
                <FaBurger className='w-[2rem] h-[2rem] sm:w[1.4rem] sm:h[1.4rem] text-orange-400'/>
                <h1 className='text-[18px] sm:text-[24px] font-semibold'>BurgerHub</h1>
            </div>
            {/*--------------nav-links------------------*/}
            <ul className='hidden lg:flex items-center space-x-10'>
                <li className='text-[16px]  hover:text-red-500'>
                    <Link href='/home'>Home</Link>
                </li>
                <li className='text-[16px]  hover:text-red-500'>
                    <Link href='/home'>Shop</Link>
                </li>
                <li className='text-[16px]  hover:text-red-500'>
                    <Link href='/home'>Menu</Link>
                </li>
                <li className='text-[16px]  hover:text-red-500'>
                    <Link href='/home'>Blog</Link>
                </li>
                <li className='text-[16px]  hover:text-red-500'>
                    <Link href='/home'>Contact</Link>
                </li>
            </ul>
            {/*------------------buttons-------------- */}
            <div className='flex items-center space-x-4'>
                <button className='px-6 py-2 sm:px-3 text-[14] sm:text-[16px] bg-blue-950 transition-all duration-200
                 hover:bg-red-600 items-center rounded-md space-x-2 text-white flex' >
                    <span>
                        <BiCycling className='w-[1.3rem] h-[1.3rem] sm::w-[1.5rem] sm:h-1.5rem]'/>
                    </span>
                    <span className='hidden sm:block'>
                        Order Now
                    </span>
                </button>
                <button className='px-6 py-2 sm:px-5  hover:bg-green-700 transition-all duration-200 bg-orange-600 flex items-center rounded-md text-white' >
                    <span>
                        <BiShoppingBag className='w-[1.3rem] h-[1.3rem] sm::w-[1.5rem] sm:h-1.5rem]'/>
                    </span>
                </button>
                <HiBars3BottomRight onClick={openNav}  className='lg:hidden w-[2rem] h-[2rem] text-black cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Nav