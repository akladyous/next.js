import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

import React from 'react';

export const metadata: Metadata = {
  title: 'users page',
  description: 'welcome to users page',
};
type Params = {
  params: {};
  searchParams: {};
};

export default async function UsersPage(params: Params) {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <div className='my-2 py-2 border'>
        <Link
          href='/'
          className='bg-blue-200 p-2'
        >
          home page
        </Link>
      </div>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link
                className=' hover:text-red-300'
                href={`/users/${user.id}`}
              >
                {user.name}
              </Link>
            </p>
          </>
        );
      })}
    </section>
  );

  return content;
}
