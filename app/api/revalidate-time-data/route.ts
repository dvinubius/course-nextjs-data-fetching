import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  revalidateTag('time-data');
  return Response.json({ success: true })
}