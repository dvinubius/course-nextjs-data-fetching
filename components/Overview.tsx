import Link from 'next/link'
import React from 'react'

function Overview() {
  return (
    <div className='py-12 lg:px-32 px-16 rounded-xl bg-blue-50 border-[0.5px] border-gray shadow-2xl'>
      <h1 className='text-4xl'>Data fetching</h1>
      <hr className='mt-8'/>
      <div className='flex gap-16 lg:gap-32 mt-8'>
        <div className=''>
          <h2 className='text-2xl mb-8'>Client Side</h2>
          <div className='flex flex-col gap-8 mx-auto'>
            <Link href='client-naive' className='text-lg text-blue-900'>naive CSR</Link>
            <Link href='client-secure' className='text-lg text-blue-900'>secure CSR</Link>
          </div>    
        </div>
        <div>
          <h2 className='text-2xl mb-8'>Server Side</h2>
          <div className='flex flex-col gap-8 mx-auto'>
            <Link href='' className='text-lg text-blue-900'>Dynamic (SSR)</Link>
            <Link href='' className='text-lg text-blue-900'>Static (SSG)</Link>
            <Link href='' className='text-lg text-blue-900'>Regenerating auto (ISR)</Link>
            <Link href='' className='text-lg text-blue-900'>Regenerating manually</Link>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Overview