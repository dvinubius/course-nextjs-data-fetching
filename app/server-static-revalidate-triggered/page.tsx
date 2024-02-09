// import RevalidateBtn from '@/components/RevalidateBtn';
import RevalidateBtn2 from '@/components/RevalidateBtn2';
import { ENDPOINT_BASE_URL } from '@/constants/fetching';

async function ServerStaticRevalidateTriggered() {

  const response = await fetch(`${ENDPOINT_BASE_URL}/data`, { next: { tags: ['time-data'] } });
  const json = await response.json();
  const { data } = json;

  return (
    <div className='flex flex-col gap-8 h-screen p-16 pt-32'>
      <h1 className='text-4xl'>Server Static (revalidate triggered)</h1>
      <p className='bg-blue-50 min-w-[600px] max-w-min p-8 rounded-lg'>
        Data is fetched by the backend during DEPLOYMENT while building the page.
        <br/> <br/>
        When <span className='text-purple-800'>revalidation is triggered</span> the data is refetched & <span className='font-semibold text-purple-800'>this page</span> is rebuilt.
        <br/> <br/>
        The page is always served as static.
      </p>
      <div className='w-full h-[400px] 
          flex flex-col items-center justify-center gap-8
          border bg-white rounded-lg shadow-sm 
          font-mono text-2xl'>
        <span className='text-purple-800'>
          {data}
        </span>
        <RevalidateBtn2 />
      </div>
    </div>
  )
}

export default ServerStaticRevalidateTriggered