import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';
import { Robots } from 'next/dist/lib/metadata/types/metadata-types';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Welcome to About Page',
};
const roboto = Roboto({
  subsets: ['latin'],
  display: 'block',
  weight: '500',
});

export default function AboutPage() {
  return (
    <main className=''>
      <h3 className={`${roboto.className} mb-3 text-2xl `}>About Page</h3>
    </main>
  );
}
