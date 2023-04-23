import Link from 'next/link';
import NavLink from '@/app/users/navlink';

export default function NavBar() {
  return (
    <header className='border-b h-12 py-2'>
      <nav className=' space-x-4'>
        <NavLink
          href='/'
          classes='hover:bg-slate-300 p-2'
        >
          Home
        </NavLink>
        {/* <Link
          className='hover:bg-slate-300 p-2 '
          href='/'
        >
          Home
        </Link> */}
        <NavLink
          classes='hover:bg-slate-300 p-2 '
          href='/users'
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
}
