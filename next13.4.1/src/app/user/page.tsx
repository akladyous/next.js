type Props = { params: {}; searchParams: {} };

export default function UserPage(props: Props) {
  console.log('User home props : ', props);
  return (
    <>
      <section
        id='userPage'
        className='border m-1 p-2 min-h-screen'
      >
        <h1>Users home page</h1>
      </section>
    </>
  );
}

// export async function generateStaticParams() {}
