type Props = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function ProvaLayout(props: Props) {
  return (
    <div
      id='activeUserLayout'
      className='border-2 border-orange-500 m-3 p-2 min-h-screen'
    >
      {props.children}
    </div>
  );
}
