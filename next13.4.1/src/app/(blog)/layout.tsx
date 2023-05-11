type UserProps = {
  children: React.ReactNode;
  params: { user_id: string };
};

export default function BlogLayout(props: UserProps) {
  return (
    <main
      id='userLayout'
      className='border-2 border-lime-700-500 m-3 p-2 min-h-screen'
    >
      <header>
        <div>
          <h3>Blog Header</h3>
        </div>
      </header>
      {props.children}
    </main>
  );
}
