'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

type Segments = string | null;

type Props = {
  params: { user_id: string };
  searchParams: {};
};

export default function User(props: Props) {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'DynamicUser page: props'.padEnd(30),
    props,
  );

  const segment: Segments = useSelectedLayoutSegment();
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'DynamicUser page:segment'.padEnd(30),
    segment,
  );
  return (
    <>
      <section>
        <h4>User account</h4>
        <p>current user id {props.params.user_id}</p>
      </section>
    </>
  );
}
