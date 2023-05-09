import type { Metadata } from 'next';

type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

async function getProduct(id: string) {
  const res = await fetch(`https://.../api/products/${id}`);
  return res.json();
}

export async function generateMetadata(props: {}): Promise<Metadata> {
  // const product = await getProduct(params.id);
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout generateMetadata props : '.padEnd(50),
    props,
  );
  return { title: 'user' };
}

export default function UserHomeLayout(props: UserProps) {
  console.log('\x1b[36m%s%s\x1b[0m', 'UserLayout props : '.padEnd(50), props);

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
