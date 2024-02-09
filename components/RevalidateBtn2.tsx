'use client' 

import { useRouter } from 'next/navigation';
import React from 'react'

function RevalidateBtn2() {
  const router = useRouter();

  const revalidate = async () => {
    const response = await fetch('/api/revalidate-time-data', {method: 'POST'});
    const parsed = response.json();
    console.log(parsed);
    router.refresh();
  };

  return (
    <button onClick={revalidate}
      className='py-4 px-8 border-none rounded-md 
      bg-gray-800 text-white font-medium text-lg
        hover:opacity-80 transition-all duration-300
        cursor-pointer'
    >
      Revalidate
    </button>
  )
}

export default RevalidateBtn2