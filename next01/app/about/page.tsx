import React from 'react';
import Image from 'next/image';
import { Inter, Roboto } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ weight: '500', subsets: ['greek', 'cyrillic'] });

export default function About() {
  return (
    <div className=' styles.main'>
      <h3 className={`${roboto.className} mb-3 text-2xl `}>
        hello from about page
      </h3>
    </div>
  );
}
