import type { NextApiRequest, NextApiResponse } from 'next';

import { NextRequest, NextResponse } from 'next/server';

type Feedback = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type ResponseData = {
  message: string;
};

export async function GET(req: Request, res: NextApiResponse) {
  debugger;
  const data: ResponseData = { message: 'mi sono rotto il cazzo' };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });

  const init = { status: 200, statusText: 'prova' };
  const response = new Response(blob, init);

  return response;
}

// export async function POST(request: NextRequest) {
//   const data = await request.json();

//   return NextResponse
// }
