'use client';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function UserHomeLayout(props: UserProps) {
  console.log('\x1b[36m%s%s\x1b[0m', 'UserLayout props : '.padEnd(50), props);
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout useSelectedLayoutSegment : '.padEnd(50),
    useSelectedLayoutSegment(),
  );
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout useSelectedLayoutSegments : '.padEnd(50),
    useSelectedLayoutSegments(),
  );

  return (
    <main
      id='userLayout'
      className='border-2 border-red-500 m-3 p-2 min-h-screen'
    >
      <h4 className='px-2'>User Layout</h4>
      {props.children}
    </main>
  );
}
