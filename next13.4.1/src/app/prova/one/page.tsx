'use client';
import {} from 'next/navigation';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function One(props: Props) {
  console.log('One -> params'.padEnd(50), props);

  return (
    <section id='userPage'>
      <h3>One Page</h3>
    </section>
  );
}
