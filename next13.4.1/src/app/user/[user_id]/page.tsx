type Props = {
  params: { user_id: string };
  searchParams: {};
};

export default function ActiveUserPage(props: Props) {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveUser page: props'.padEnd(30),
    props,
  );

  return (
    <>
      <section>
        <h4>User account</h4>
        <p>current user id {props.params.user_id}</p>
      </section>
    </>
  );
}
