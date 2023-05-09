'use client';

import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'UserLayout pathname : '.padEnd(30),
    pathname,
  );
  return <>{}</>;
}
