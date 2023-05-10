import { Metadata, ResolvingMetadata } from 'next';
import ActiveUser from '../components/ActiveLink';

type Props = {
  params: { user_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  props: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  console.log(
    '\x1b[36m%s%s\x1b[0m',
    'User generateMetadata params : '.padEnd(50),
    props.params,
  );

  return { ...props, title: `user ${props.params.user_id}` };
}

export default function User(props: Props) {
  console.log('\x1b[36m%s%s\x1b[0m', 'User: params'.padEnd(50), props);

  return (
    <>
      <section>
        <h4>User account</h4>
        <p>current user id {props.params.user_id}</p>

        <ActiveUser />
      </section>
    </>
  );
}
