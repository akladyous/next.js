type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(props: Props) {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveUserPage generateMetadata params : '.padEnd(50),
    props.params,
  );
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveUserPage generateMetadata searchParams : '.padEnd(50),
    props.searchParams,
  );
  return { ...props, title: `user ${props.params.user_id}` };
}

export default function ActiveUserPage(props: Props) {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'ActiveUserPage: params'.padEnd(50),
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
