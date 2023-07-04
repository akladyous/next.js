type Props = {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function MembersHome(props: Props) {
  console.log('MembersHome props: ', props);
  return (
    <section
      className='m-2 p-2 border min-h-screen
      flex justify-center items-center'
    >
      <h3>Members Home Page</h3>
      {props.children}
    </section>
  );
}
