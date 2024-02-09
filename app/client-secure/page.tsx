'use client'

import { ENDPOINT_BASE_URL, OUR_BASE_URL } from '@/constants/fetching';
import { AppData } from '@/types/AppData';
import React, { useEffect } from 'react'

function ClientSecure() {
  // manage component state

  // fetch data from the timedata backend via a route handler
  // use the ENDPOINT_BASE_URL & OUR_BASE_URL for convenience

  return (
    <div className='flex flex-col gap-8 h-screen p-16'>
      <h1 className='text-4xl'>Secure Client Side</h1>
      <p className='bg-blue-50 min-w-[600px] max-w-min p-8 rounded-lg'>
        Data is fetched by client after the page is rendered.
        <br/> <br/>
        The request goes to our own backend (api route handler), which calls the 3rd party API. 
        <br/> <br/>
        <span className='text-blue'> ✅ Credentials for 3rd party API are not exposed to the client.</span>
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

export default ClientSecure