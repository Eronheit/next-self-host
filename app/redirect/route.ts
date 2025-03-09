import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.clone() 

  const pathEncoded = (url.search ?? '').replace('?path=', '')
  const path = decodeURIComponent(pathEncoded)

  let pathToRedirect = path.startsWith('/') ? path : `/${path}`

  return NextResponse.redirect(
    new URL(`${pathToRedirect}`, req.url),
    307
  )
}