'use client';

import Link, { LinkProps } from 'next/link';

import { useSelectedLayoutSegment } from 'next/navigation';

// React.AllHTMLAttributes<HTMLAnchorElement>
interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();
  let isActive = href === `/${segment}`;
  console.log('NavLink -> href:     ', href);
  console.log('NavLink -> segment:  ', segment);
  console.log('NavLink -> children: ', children);
  console.log('-'.repeat(50));

  return (
    <>
      <Link
        {...(className && { className })}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
