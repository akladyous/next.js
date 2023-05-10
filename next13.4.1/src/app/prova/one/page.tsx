'use client';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function One(props: Props) {
  const segments = useSelectedLayoutSegments();
  const segment = useSelectedLayoutSegment();
  console.log('One -> segments : ', segments);
  console.log('One -> segment : ', segment);

  console.log('One -> params'.padEnd(50), props);

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
