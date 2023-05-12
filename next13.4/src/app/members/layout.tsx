type Props = {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;

  params: { user_id: string };
};

export default function MembersLayout(props: Props) {
  console.log('MembersLayout props : ', props);
  return (
    <div
      id='activeUserLayout'
      className='border-2 border-orange-500 m-3 p-2 min-h-screen'
    >
      {props.children}
      {props.team}
      {props.analytics}
    </div>
  );
}
