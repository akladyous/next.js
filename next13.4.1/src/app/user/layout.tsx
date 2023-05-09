import type { Metadata } from 'next';

async function getProduct(id: string) {
  const res = await fetch(`https://.../api/products/${id}`);
  return res.json();
}
type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export async function generateMetadata(props: {}): Promise<Metadata> {
  // const product = await getProduct(params.id);
  console.log('user generateMetadata props : ', props);
  return { title: 'user' };
}

export default function UserLayout(props: UserProps) {
  return (
    <section className='border m-1 p-2 min-h-screen'>{props.children}</section>
  );
}
