'use client';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProvaPage(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'User: params'.padEnd(50), props);

  return (
    <section id='userPage'>
      <h3>Prova Page</h3>
    </section>
  );
}
