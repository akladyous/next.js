'use client';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProvaPage(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'User: params'.padEnd(50), props);

  return (
    <section
      id='userPage'
      className='border-2 border-blue-500 m-1 p-2 min-h-screen'
    >
      <h3>Prova Page</h3>
    </section>
  );
}
