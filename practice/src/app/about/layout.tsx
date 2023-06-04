import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is About Page',
};

export default function AboutLayout(props: LayoutProps) {
  const { children } = props;
  // console.log('children props : ', props.children?.props);

  console.log('-'.repeat(60));
  console.log(props);
  console.log('-'.repeat(60));

  return (
    <main className='border-sky-200 border min-h-screen m-5 p-5'>
      <div className='border p-2'>
        <Link
          href={'/'}
          className='bg-slate-100 p-2 rounded-lg hover:bg-sky-200'
        >
          Home
        </Link>
      </div>
      {props.children}
    </main>
  );
}
