'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <div className='text-3xl text-red-500'>Sorry, an error occured!</div>
      <button
        className="mt-12 rounded-md bg-gray-800 px-4 py-2 text-white hover:opacity-80 transition-all duration-300 ease-in-out"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}














// 'use client'

// function Error() {
//   return (
//     <div className='flex w-full h-screen justify-center items-center'>
//       <div className='text-4xl text-red-500'>Sorry, an error occured!</div>
//     </div>
//   )
// }

// export default Error