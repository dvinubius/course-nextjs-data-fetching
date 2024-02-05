import Link from 'next/link'
import React from 'react'

function Overview() {
  return (
    <div className='w-full lg:max-w-[800px]
        flex flex-col gap-8
        py-12 sm:px-12 px-8
        rounded-xl bg-blue-50 border-[0.5px] border-gray shadow-2xl'>
      <div className='flex justify-between w-full flex-wrap gap-16'>
        <div className=''>
          <h2 className='sm:text-2xl text-xl mb-8 text-nowrap'>Client Side</h2>
          <div className='flex flex-col gap-8 mx-auto'>
            <Link href='client-naive' className='text-lg text-blue-900'>Naive CSR</Link>
            <Link href='client-secure' className='text-lg text-blue-900'>Secure CSR</Link>
          </div>    
        </div>
        <div>
          <h2 className='sm:text-2xl text-xl mb-8 text-nowrap'>Server Side</h2>
          <div className='flex flex-col gap-8 mx-auto'>
            <Link href='server-static' className='text-lg text-blue-900'>Static (SSG)</Link>
            <Link href='server-dynamic' className='text-lg text-blue-900'>Dynamic (SSR)</Link>
          </div>    
        </div>
        <div>
          <h2 className='sm:text-2xl text-xl mb-8 text-nowrap'>Fancy Server Side</h2>
          <div className='flex flex-col gap-8 mx-auto'>
            <Link href='server-static-revalidate-auto' className='text-lg text-blue-900'>Revalidating auto (ISR)</Link>
            <Link href='server-static-revalidate-triggered' className='text-lg text-blue-900'>Revalidating triggered</Link>
            <Link href='server-partial-pre' className='text-lg text-blue-900'>Partial Prerendering</Link>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default Overview