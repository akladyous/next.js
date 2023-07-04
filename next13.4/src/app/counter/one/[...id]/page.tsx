'use client';
import {} from 'next/navigation';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function OptionalCatchAllSegments(props: Props) {
  console.log('OptionalCatchAllSegments -> params'.padEnd(50), props);

  return (
    <section id='userPage'>
      <h3>Optional Catch-all Segments Page</h3>
    </section>
  );
}
