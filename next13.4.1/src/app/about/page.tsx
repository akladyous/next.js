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

export default function AboutPage(props: {}) {
  // throw new Error('custom error invoked');
  console.log('AboutPage props : ', props);
  return (
    <section
      id='userPage'
      className='border-2 border-blue-500 m-1 p-2 min-h-screen'
    >
      <h3>About Page</h3>
    </section>
  );
}
