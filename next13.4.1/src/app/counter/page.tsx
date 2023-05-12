'use client';
import { useState } from 'react';
type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface ClickHandler {
  (event: React.MouseEvent<HTMLElement>): void;
}

export default function CounterPage(props: Props) {
  // console.log('\x1b[36m%s%s\x1b[0m', 'ProvaPage: params'.padEnd(50), props);

  const [counter, setCounter] = useState(0);
  const increment: ClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    setCounter((v) => v + 1);
  };
  const decrement: ClickHandler = (_event: React.MouseEvent<HTMLElement>) => {
    setCounter((v) => v - 1);
  };

  if (counter < 0) {
    const err = new Error("Counter cann't be negative number");
    err.stack = undefined;
    throw err;
  }
  return (
    <section id='userPage'>
      <h3>Prova Page</h3>
      <div className='text-center pb-2 border max-w-fit mx-auto px-4 rounded-lg'>
        <p>counter component</p>
      </div>
      <div
        className=''
        id='counter'
      >
        <p className='text-center'>{counter}</p>
        <div className='flex'>
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={increment}
          >
            +
          </button>
          <button
            className='border rounded-md bg-slate-100 px-5 mx-auto'
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
}
