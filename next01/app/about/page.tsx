import Image from 'next/image';
import type { Metadata } from 'next';

import { Inter, Roboto } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ weight: '500', subsets: ['greek', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'about page',
  description: 'Welcome to about page',
};

export default function About() {
  // throw new Error('Not today!!!!');

  return (
    <div className=' styles.main'>
      <h3 className={`${roboto.className} mb-3 text-2xl `}>
        hello from about page
      </h3>
    </div>
  );
}
