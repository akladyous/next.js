'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type NavLinkProps = {
  children?: React.ReactNode;
  href: string;
  classes?: string;
};

export default function NavLink({ href, children, classes }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();

  console.log('NavLink -> href:     ', href);
  console.log('NavLink -> segment:  ', segment);
  console.log('NavLink -> children: ', children);
  console.log('-'.repeat(50));

  return (
    <>
      <Link
        {...(classes ? { className: classes } : {})}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
