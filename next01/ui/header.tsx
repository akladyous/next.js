import Link from 'next/link';

export default function Header() {
  return (
    <div className='border-b p-4 bg-slate-200  '>
      <nav className=' space-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
      </nav>
    </div>
  );
}
