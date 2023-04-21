import type { Metadata } from 'next';
import getAllUsers from '@/lib/getAllUsers';
import Link from 'next/link';

import React from 'react';

export const metadata: Metadata = {
  title: 'users page',
  description: 'welcome to users page',
};

export default async function UsersPage() {
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
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </>
        );
      })}
    </section>
  );

  return content;
}
