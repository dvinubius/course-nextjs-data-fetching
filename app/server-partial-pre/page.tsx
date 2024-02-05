import React, { Suspense } from 'react'
import DataDisplay from './DataDisplay'
import ErrorBoundary from '@/components/ErrorBoundary';

function ServerPartialPre() {
  const loadingDisplay = (
    <div className='w-full flex items-center justify-center h-[400px]'>
      <div className='text-2xl text-gray-500 animate-pulse'>Loading...</div>
    </div>
  );

  return (
    <div className='flex flex-col gap-8 h-screen p-16 pt-32'>
      <h1 className='text-4xl'>Server Dynamic</h1>
      <p className='bg-blue-50 min-w-[600px] max-w-min p-8 rounded-lg'>
        Data is fetched by the backend during DEPLOYMENT while building the page.
        <br/> <br/>
        The page remains static and does not change over time.
      </p>
      <ErrorBoundary >
        <Suspense fallback={loadingDisplay}>
          <DataDisplay/>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ServerPartialPre