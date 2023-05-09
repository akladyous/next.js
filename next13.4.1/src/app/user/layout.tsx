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
  console.log('user generateMetadata props : ', props);
  return { title: 'user' };
}

export default function UserLayout(props: UserProps) {
  console.log('UserLayout props : ', props);
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
