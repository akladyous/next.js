'use client';
import { useSelectedLayoutSegments } from 'next/navigation';

type Segments = string[] | null;

type Props = {
  params: { user_id: string };
  searchParams: {};
};

export default function User(props: Props) {
  console.log('user params page : ', props);

  const segments: Segments = useSelectedLayoutSegments();
  console.log('\x1b[36m%s%s\x1b[0m', 'user component segments : ', segments);
  return (
    <>
      <section>
        <h4>User account</h4>
        <p>current user id {props.params.user_id}</p>
      </section>
    </>
  );
}
