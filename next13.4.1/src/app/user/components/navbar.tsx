import Link from 'next/link';
import NavLink from '@/app/users/navlink';

export default function NavBar() {
  return (
    <header className='border-b h-12 py-2'>
      <nav className=' space-x-4'>
        <NavLink
          href='/'
          className='hover:bg-slate-300 p-2'
        >
          Home
        </NavLink>

        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/about'
        >
          about
        </NavLink>

        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/prova'
        >
          prova
        </NavLink>

        <NavLink
          className='hover:bg-slate-300 p-2 '
          href='/user'
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
}
