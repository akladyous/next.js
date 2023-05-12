'use client';

import { useEffect } from 'react';

type ErrorProps = { error: Error; reset: () => void };

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log('CounterPage - error : ', error);
    console.log('CounterPage - reset : ', reset);
  }, [error]);

  return (
    <>
      <section>
        <h3>error page</h3>
      </section>
    </>
  );
}
