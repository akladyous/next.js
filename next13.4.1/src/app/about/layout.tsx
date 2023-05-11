'use client';
import Script from 'next/script';
type Props = { children: React.ReactNode; params: {} };
import styles from './styles.module.css';

export default function AboutLayout(props: Props) {
  return (
    <>
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

      <section
        id='activeUserLayout'
        className='border-2 border-orange-500 m-3 p-2 min-h-screen'
      >
        {props.children}
      </section>
    </>
  );
}
