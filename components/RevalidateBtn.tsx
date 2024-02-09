'use client'

import revalidateTimeData from '@/app/actions'
import { useRouter } from 'next/navigation';
import React from 'react'

function RevalidateBtn() {
  const router = useRouter();

  return (
      <button onClick={async () => {
        revalidateTimeData();
        router.refresh();
      }}
        className='py-4 px-8 border-none rounded-md 
        bg-gray-800 text-white font-medium text-lg
          hover:opacity-80 transition-all duration-300
          cursor-pointer'
      >
        Revalidate
      </button>
  )
}

export default RevalidateBtn