import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
  const segment = useSelectedLayoutSegment();
  const isActive = href === segment;
  console.log('segment : ', segment);
  console.log('isActive : ', isActive);

  return (
    <>
      <Link
        href={`${href}`}
        className={isActive ? 'font-bold' : 'underline'}
      >
        {children}
      </Link>
    </>
  );
}
