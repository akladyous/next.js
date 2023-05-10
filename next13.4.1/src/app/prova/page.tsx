'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect } from 'react';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Prova(props: Props) {
  const segments = useSelectedLayoutSegments();
  console.log('Prova -> segments : ', segments);
  console.log('\x1b[36m%s%s\x1b[0m', 'User: params'.padEnd(50), props);
  useEffect(() => {
    console.log('Prova[useEffect] -> segments : ', segments);
  }, [segments]);
  return (
    <section
      id='userPage'
      className='border-2 border-blue-500 m-1 p-2 min-h-screen'
    >
      <h3>Prova Page</h3>
      <ul>
        {segments.map((segment, index) => (
          <li key={index}>{segment}</li>
        ))}
      </ul>
    </section>
  );
}
