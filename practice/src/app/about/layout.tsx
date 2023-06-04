import { AppProps } from 'next/app';

type Props = {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function AboutLayout(props: Props) {
  return <></>;
}
