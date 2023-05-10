import ActiveLink from './activeLinkes';
import NavLink from './user/components/NavLink';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section className='border-green-500 border-2 m-2 p-2 min-h-screen'>
      <h3>Home Page</h3>
      <ActiveLink />

      <NavLink href='prova'>Prova Page...</NavLink>
    </section>
  );
}
