import Link from 'next/link'
import React from 'react'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import { RiHome4Fill } from 'react-icons/ri';

function Header() {
  const navClasses = 'flex items-center gap-2 sm:w-[120px] sm:text-2xl text-lg sm:mx-16 mx-8 my-4 tracking-wider'
  return (
    <div className='absolute top-0 left-0 w-full h-[4rem]
        flex items-center justify-between 
        bg-[#324] text-white shadow-md px-8 py-4 z-10
      '>
      <Link href="/" className='outline-none'>
        <div className={navClasses}>
          <RiHome4Fill/> Home 
        </div>
      </Link>
      <Link href="/" className='outline-none'>
        <div className={navClasses}>
          Docs <BsArrowUpRightSquareFill/>
        </div>
      </Link>
    </div>
  )
}

export default Header