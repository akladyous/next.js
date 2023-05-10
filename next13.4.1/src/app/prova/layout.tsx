type Props = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function ProvaLayout(props: Props) {
  return (
    <section
      id='activeUserLayout'
      className='border-2 border-orange-500 m-3 p-2 min-h-screen'
    >
      <h4 className='px-2'>Prova Layout</h4>

      {props.children}
    </section>
  );
}
