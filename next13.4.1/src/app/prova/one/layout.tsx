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
      {props.children}
    </section>
  );
}
