import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="relative w-full flex justify-center align-start gap-6 flex-wrap
      sm:my-32 my-16 
      
      before:absolute before:-z-20 before:h-[300px] before:w-full sm:before:w-[480px] 
      before:-translate-x-1/2
      before:rounded-full 
      before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 

      after:absolute after:-z-20 after:h-[80vh] after:w-full sm:after:w-[60vw] 
      after:translate-x-[0vw] after:translate-y-[-5vh]
      after:bg-gradient-conic after:from-sky-200 after:via-purple-200 after:to-teal-100 after:blur-3xl after:content-[''] 
      
      before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 
      after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] 
      
      z-[-1]
      ">
      <div className='sm:w-[150px] w-[100px] flex items-center min-w-[100px]'>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={150}
          height={30}
          priority
        />
      </div>
      <h1 className='sm:text-[2.5rem] text-[1.65rem] text-black font-medium text-nowrap'>DATA FETCHING</h1>
    </div>
  )
}

export default Hero