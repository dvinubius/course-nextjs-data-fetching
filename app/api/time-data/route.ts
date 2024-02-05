import { ENDPOINT_BASE_URL } from "@/constants/fetching"

export const dynamic = 'force-dynamic' // defaults to 'auto'
// if 'auto', the response is cached at build time and not updated until the next build

export async function GET(request: Request) {
  const res = await fetch(`${ENDPOINT_BASE_URL}/data`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}