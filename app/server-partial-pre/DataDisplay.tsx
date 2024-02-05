import { ENDPOINT_BASE_URL } from '@/constants/fetching';

async function DataDisplay() {

  const response = await fetch(`${ENDPOINT_BASE_URL}/data`, {cache: 'no-store'});
  const json = await response.json();
  const { data } = json;

  return (
    <div className='w-full h-[400px] flex flex-col items-center justify-center 
        border bg-white rounded-lg shadow-sm 
        font-mono text-2xl'>
      <span className='text-purple-800'>
        {data}
      </span>
    </div>
  )
}

export default DataDisplay