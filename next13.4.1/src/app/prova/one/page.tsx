'use client';
import { useSelectedLayoutSegments } from 'next/navigation';

export default function One() {
  const segments = useSelectedLayoutSegments();
  console.log('One -> segments : ', segments);
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
