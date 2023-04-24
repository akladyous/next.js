import { NextURL } from 'next/dist/server/web/next-url';
import { INTERNALS } from 'next/dist/server/web/spec-extension/request';
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
  currentDate: Date;
  ip?: string;
};
async function getMethod(req: NextRequest, res: ?NextResponse) {
  const data: ResponseData = {
    message: 'hellow fron nextJS',
    currentDate: new Date(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  const init = { status: 200, statusText: 'okay' };
  const response1 = new Response(blob, init);
  return new NextResponse(blob, init);
}

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  return NextResponse.json({ message: 'hello', name: name }, { status: 200 });
}
