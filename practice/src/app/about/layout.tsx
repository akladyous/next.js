import Link from 'next/link';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '300', style: 'normal', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is About Page',
};

export default function AboutLayout(props: LayoutProps) {
  const { children } = props;

  return (
    <main
      className={'border-sky-200 border min-h-screen m-5 p-5 '.concat(
        roboto.className,
      )}
    >
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
