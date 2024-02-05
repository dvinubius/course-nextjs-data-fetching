import revalidateTimeData from '@/app/actions'
import React from 'react'

function RevalidateBtn() {
  return (
    <form action={revalidateTimeData}>
      <button type="submit"
        className='py-4 px-8 border-none rounded-md 
        bg-gray-800 text-white font-medium text-lg
          hover:opacity-80 transition-all duration-300
          cursor-pointer'
      >
        Revalidate
      </button>
    </form>
  )
}

export default RevalidateBtn