import type { Metadata } from 'next';

import Link from 'next/link';
import { getUsers } from '@/lib/getUsers';

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metaData: Metadata = {
  title: 'Users Home Page',
  description: 'welcome to users page',
};

export default async function UserHome(props: Props) {
  const usersData: Promise<User[]> = await getUsers();
  const users: User[] = await usersData;

  console.log('\x1b[36m%s%s\x1b[0m', 'UserHome props : '.padEnd(50), props);

  return (
    <section id='userPage' className='border-2 border-blue-500 px-2'>
      <h1>Users home page</h1>
      <div>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className={'px-2 my-1 border hover:text-amber-900 text-blue-500 '}
            >
              <Link href={`/users/${user.id}`} className={'text-blue-500 '}>
                {user.name}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// export async function generateStaticParams() {}
