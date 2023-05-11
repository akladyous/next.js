'use client';
import Link from 'next/link';
import type { LinkProps } from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

interface Props extends LinkProps {
  href: string;
  children?: React.ReactNode;
  classes?: string | string[];
}
const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default function NavLink(props: Props) {
  const { href, children, classes } = props || {};
  const segment = useSelectedLayoutSegment();
  const isActive = href === segment;
  return (
    <>
      <Link
        href={href}
        className={classNames(
          isActive ? 'bg-gray-100 underline' : '',
          'text-gray-900 hover:bg-blue-400 p-2 rouned-lg',
        )}
      >
        {children}
      </Link>
    </>
  );
}
