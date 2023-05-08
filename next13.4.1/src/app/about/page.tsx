import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

import type { ReactElement } from 'react';
// const metadata: Metadata = {
//   title: 'About page',
//   description: 'Welcome to About page',
// };

export async function generateMetadata(params: {}) {
  return {
    ...params,
    title: 'About Page',
    description: 'Welcome to About Page',
  };
}

const roboto = Roboto({
  subsets: ['latin'],
  display: 'block',
  weight: '400',
});

export default function AboutPage() {
  throw new Error('custom error invoked');

  return (
    <main className=''>
      <h3 className={`${roboto.className} mb-3 text-2xl `}>About Page</h3>
    </main>
  );
}
