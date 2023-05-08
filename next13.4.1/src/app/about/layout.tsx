'use client';
import Script from 'next/script';
type Props = { children: React.ReactNode; params: {} };

export default function AboutLayout(props: Props) {
  console.log('AboutLayout params: ', props.params);
  return (
    <>
      <section>{props.children}</section>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
        onLoad={() => {
          console.log('onLoad');
        }}
        onReady={() => {
          console.log('onReady');
        }}
        onError={() => {
          console.log('onError');
        }}
      />
    </>
  );
}
