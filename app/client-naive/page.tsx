'use client'

import { ENDPOINT_BASE_URL } from '@/constants/fetching';
import { AppData } from '@/types/AppData';
import React, { useEffect } from 'react'

function ClientNaive() {
  const [data, setData] = React.useState<AppData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ENDPOINT_BASE_URL}/data`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError(error as Error);
      }
    };
    fetchData();
  }, []);

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
        {loading && <p className='text-gray-500'>Loading...</p>}
        {error && <p className='text-red'>Error: {error.message}</p>}
        {data && (
          <span className='text-purple-800'>
            {data.data}
          </span>
        )}
      </div>
    </div>
  )
}

export default ClientNaive