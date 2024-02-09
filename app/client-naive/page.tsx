'use client'

import { ENDPOINT_BASE_URL } from '@/constants/fetching';

import React from 'react'


function ClientNaive() {

  // manage component state

  
  // fetch data directly from the timedata backend
  // use the ENDPOINT_BASE_URL for convenience


  return (
    <div className='flex flex-col gap-8 h-screen p-16'>
      <h1 className='text-4xl'>Naive Client Side</h1>
      <p className='bg-blue-50 min-w-[600px] max-w-min p-8 rounded-lg'>
        Data is fetched by client after the page is rendered.
        <br/> <br/>
        The request goes directly to the 3rd party API.
        <br/> <br/>
        <span className='text-red-800'> ⚠️ Client has API credentials.</span>
      </p>
      <div className='w-full h-[400px] flex flex-col items-center justify-center 
          border bg-white rounded-lg shadow-sm 
          font-mono text-2xl'>
        {/* 
        
          ~~ your code here ~~
        
          - account for loading and error states
          - display the fetched data
        
        */}
      </div>
    </div>
  )
}

export default ClientNaive