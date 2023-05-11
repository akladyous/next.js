'use client';
import {} from 'next/navigation';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function One(props: Props) {
  console.log('One -> params'.padEnd(50), props);

  return (
    <section
      id='userPage'
      className='border-2 border-blue-500 m-1 p-2 min-h-screen'
    >
      <h3>One Page</h3>
    </section>
  );
}
