import Link from 'next/link';
import ActiveUser from './components/activeUser';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function UserHome(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'UserHome props : '.padEnd(50), props);

  return (
    <>
      <section
        id='userPage'
        className='border-2 border-blue-500 m-1 p-2 min-h-screen'
      >
        <h1>Users home page</h1>

        <div>
          <Link
            className='bg-slate-200 mr-2 p-1'
            href={'/user/1'}
          >
            user 1
          </Link>
          <Link
            className='bg-slate-200 mr-2 p-1'
            href={'/user/2'}
          >
            user 2
          </Link>
        </div>
        <ActiveUser />
      </section>
    </>
  );
}

// export async function generateStaticParams() {}
