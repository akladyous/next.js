'use client';

import { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log('Prova Route Error Boundary: ', error);
  }, []);
  return (
    <section>
      <h3>Prova Route Error Boundary</h3>
      <button onClick={() => reset()}>Try Again</button>
    </section>
  );
}
