import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='min-h-screen'>
      <h2>home page</h2>
      <p>
        <Link href='users'>Users</Link>
      </p>
    </main>
  );
}
