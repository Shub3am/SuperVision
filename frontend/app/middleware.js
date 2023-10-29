import { NextResponse } from "next/server";

// the list of all allowed origins
const allowedOrigins = [
  'http://localhost:3000', 
  'https://speed-reader-backend-z3x6.onrender.com/', 
];

export function middleware(req) {
    // retrieve the current response
    const res = NextResponse.next()

    // retrieve the HTTP "Origin" header 
    // from the incoming request
    req.headers.get("origin")

    // if the origin is an allowed one,
    // add it to the 'Access-Control-Allow-Origin' header
    if (allowedOrigins.includes(origin)) {
      res.headers.append('Access-Control-Allow-Origin', origin);
    }

    // add the remaining CORS headers to the response
    res.headers.append('Access-Control-Allow-Credentials', "true")
    res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    res.headers.append(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )

    return res
}

export const config = {
    matcher: '/:path*',
}