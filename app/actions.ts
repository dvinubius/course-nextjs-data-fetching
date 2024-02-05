'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalidateTimeData() {
  revalidateTag('time-data');
}