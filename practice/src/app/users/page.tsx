import { getAllUsers } from '@/lib/getAllUsers';

export default function FetchPage(props: {}) {
  const usersData: Promise<{}> = getAllUsers();

  return (
    <main>
      <h3>Fetch Data</h3>
    </main>
  );
}
