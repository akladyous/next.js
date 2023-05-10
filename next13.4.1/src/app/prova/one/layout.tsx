type Props = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function OneLayout(props: Props) {
  return (
    <section
      id='activeUserLayout'
      className='border-2 border-yellow-500 m-3 p-2 min-h-screen'
    >
      <h4 className='px-2'>One Layout</h4>

      {props.children}
    </section>
  );
}
