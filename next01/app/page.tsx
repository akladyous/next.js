import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default async function Home() {
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/New_York',
  );
  const data = await res.json();
  return (
    <main className='min-h-screen'>
      <h2>home page</h2>
      <p>
        <Link href='users'>Users</Link>
      </p>
    </main>
  );
}
