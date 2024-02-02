import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='absolute top-0 left-0 w-full
        flex items-center
      '>
      <Link href="/">
        <div className='w-[100px] text-2xl mx-16 my-4 font-medium uppercase tracking-wider underline'>
          Home
        </div>
      </Link>
    </div>
  )
}

export default Header