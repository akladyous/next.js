// 'use client';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: {};
};

export default function RootLayout(props: Props) {
  return (
    <html lang='en'>
      <body className={`${inter.className} `}>
        <h4 className='px-2'>Root Layout</h4>
        <main className='border-green-500 border-2 m-2 p-2 min-h-screen'>
          {props.children}
        </main>
      </body>
    </html>
  );
}
