'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect } from 'react';

export default function Prova() {
  const segments = useSelectedLayoutSegments();
  console.log('Prova -> segments : ', segments);

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
