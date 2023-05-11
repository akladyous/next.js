'use client';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  usePathname,
} from 'next/navigation';

type Segments = string[] | null;

export default function ActiveLink() {
  const segment = useSelectedLayoutSegment();
  const segments: Segments = useSelectedLayoutSegments();
  const pathname = usePathname();

  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveLink pathname : '.padEnd(50),
    pathname,
  );

  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveLink segment : '.padEnd(50),
    segment,
  );

  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveLink segments : '.padEnd(50),
    segments,
  );

  return (
    <div>
      <h4>active user segment {segment && 'root /'}</h4>
      <ul>
        {segments
          ? segments.map((segment, index) => <li key={index}>{segment}</li>)
          : null}
      </ul>
    </div>
  );
}
