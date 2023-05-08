'use client';

import { useEffect } from 'react';

type ErrorProps = { error: Error; reset: () => void };

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log('Error component error : ', error);
    console.log('Error component reset : ', reset);
  }, [error]);

  return (
    <>
      <section>
        <h3>error page</h3>
      </section>
    </>
  );
}
