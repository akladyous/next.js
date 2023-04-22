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
  debugger;
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link href='/'>home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          </>
        );
      })}
    </section>
  );

  return content;
}
