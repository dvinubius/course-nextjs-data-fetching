import { ENDPOINT_BASE_URL } from '@/constants/fetching';

async function ServerStaticRevalidateAuto() {

  const response = await fetch(`${ENDPOINT_BASE_URL}/data`, { next: { revalidate: 10 } });
  const json = await response.json();
  const { data } = json;

  return (
    <div className='flex flex-col gap-8 h-screen p-16 pt-32'>
      <h1 className='text-4xl'>Server Static (revalidate time-based)</h1>
      <p className='bg-blue-50 min-w-[600px] max-w-min p-8 rounded-lg'>
        Data is fetched by the backend during DEPLOYMENT while building the page.
        <br/> <br/>
        The page is rebuilt with fresh data once every 10 seconds (give or take).
        <br/> <br/>
        The page is always served as static.
      </p>
      <div className='w-full h-[400px] flex flex-col items-center justify-center 
          border bg-white rounded-lg shadow-sm 
          font-mono text-2xl'>
        <span className='text-purple-800'>
          {data}
        </span>
      </div>
    </div>
  )
}

export default ServerStaticRevalidateAuto