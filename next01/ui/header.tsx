import Link from 'next/link';

export default function Header() {
  return (
    <header className='border-b p-4'>
      <nav className='space-x-4 px-2'>
        <Link href='/'>Home</Link>
        <Link href='/users'>Users</Link>
      </nav>
    </header>
  );
}
