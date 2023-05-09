'use client';
import { useSelectedLayoutSegment, usePathname } from 'next/navigation';

export default function ActiveUser() {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout segment : '.padEnd(30),
    segment,
  );

  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout pathname : '.padEnd(30),
    pathname,
  );

  return <>active user segment {segment}</>;
}
