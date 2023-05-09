import type { Metadata } from 'next';

async function getProduct(id: string) {
  const res = await fetch(`https://.../api/products/${id}`);
  return res.json();
}
type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export async function generateMetadata(props: {
  params: { user_id: string };
}): Promise<Metadata> {
  // const product = await getProduct(params.id);
  console.log('user generateMetadata props : ', props);
  return { title: 'user' };
}

export default function UserLayout(props: UserProps) {
  return <section>{props.children}</section>;
}
