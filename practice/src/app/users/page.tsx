import Link from 'next/link';
import { getAllUsers } from '@/lib/getAllUsers';

export default async function FetchPage(props: {}) {
  const usersData: Promise<User[]> = await getAllUsers();
  const users: User[] = await usersData;

  console.log('FetchPage props : ', props);

  return (
    <section className='border border-blue-500 px-2'>
      <h3>Fetch Data</h3>
      <div className='my-2'>
        {users.map((user) => (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
