import { NextRequest } from 'next/server';

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers
// Can be accessed at http://localhost:3000/api

export async function GET(request: NextRequest) {
  //return new Response('Hello!');
  return new Response(
    JSON.stringify({
      newsCount: 1,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  return new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  });
}
