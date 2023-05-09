import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

type Props = { params: {}; searchParams: {} };

export default function UserPage(props: Props) {
  console.log('User home props : ', props);
  const segments = useSelectedLayoutSegment();
  console.log('user component segments : ', segments);
  return (
    <>
      <section
        id='userPage'
        className='border-2 border-blue-500 m-1 p-2 min-h-screen'
      >
        <h1>Users home page</h1>
      </section>
    </>
  );
}

// export async function generateStaticParams() {}
