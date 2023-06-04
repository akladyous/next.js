import { AppProps } from 'next/app';

type Props = {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function AboutLayout(props: Props) {
  console.log('children props : ', props.children?.props);
  // console.log(props);
  return (
    <main className='border-sky-200 border min-h-screen m-5 p-5'>
      {props.children}
    </main>
  );
}
