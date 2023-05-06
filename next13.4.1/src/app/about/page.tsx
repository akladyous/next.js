import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Welcome to About Page',
};
export default function AboutPage() {
  return (
    <main className=''>
      <h3>About Page</h3>
    </main>
  );
}
