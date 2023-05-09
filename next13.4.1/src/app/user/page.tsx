'use client';

import { useSelectedLayoutSegments } from 'next/navigation';

type Props = { params: {}; searchParams: {} };
type Segments = string[] | null;

export default function UserPage(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'User home props : ', props);
  const segments: Segments = useSelectedLayoutSegments();

  console.log('\x1b[36m%s%s\x1b[0m', 'user component segments : ', segments);
  return (
    <>
      <section
        id='userPage'
        className='border-2 border-blue-500 m-1 p-2 min-h-screen'
      >
        <h1>Users home page</h1>
        <ul>
          {segments
            ? segments.map((segment, index) => <li key={index}>{segment}</li>)
            : null}
        </ul>
      </section>
    </>
  );
}

// export async function generateStaticParams() {}
