'use client';
import { useEffect } from 'react';
import Link, { LinkProps } from 'next/link';

import {
  useSelectedLayoutSegment,
  usePathname,
  useSearchParams,
} from 'next/navigation';

// React.AllHTMLAttributes<HTMLAnchorElement>
interface NavLinkProps extends LinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
}
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const segment = useSelectedLayoutSegment();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  let active = href === `/${segment ? segment : ''}`;
  console.log('NavLink -> href:     ', href);
  console.log('NavLink -> children: ', children);
  console.log('NavLink -> is active: ', active);
  console.log('-'.repeat(50));

  useEffect(() => {
    console.log('searchParams : ', searchParams);
    console.log('pathname     : ', pathname);
  }, [searchParams, pathname]);

  return (
    <>
      <Link
        href={href}
        // {...(className && { className })}
        className={classNames(
          active ? 'bg-gray-100 underline' : '',
          'text-gray-900 hover:bg-blue-400 p-2 rouned-lg',
        )}
      >
        {children}
      </Link>
    </>
  );
}
