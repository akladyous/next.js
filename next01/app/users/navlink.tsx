import Link from 'next/link';

type NavLinkParams = {
  children?: React.ReactNode;
  href: string;
};

export default async function NavLink({ href, children }: NavLinkParams) {
  console.log('NavLink -> href: ', href);
  return <Link href={href}>{children}</Link>;
}
