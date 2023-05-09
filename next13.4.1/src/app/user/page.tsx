type Props = { params: {}; searchParams: {} };

export default function UserPage(props: Props) {
  console.log('User home props : ', props);
  return (
    <>
      <section>{'user homex page'}</section>
    </>
  );
}

// export async function generateStaticParams() {}
