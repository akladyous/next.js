type Props = {
  params: { user_id: string };
  searchParams: {};
};

export default function User(props: Props) {
  console.log('user params page : ', props);

  return (
    <>
      <section>
        <h4>User account</h4>
        <p>current user id {props.params.user_id}</p>
      </section>
    </>
  );
}
