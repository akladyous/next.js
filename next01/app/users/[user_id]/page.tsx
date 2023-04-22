import getUser from '@/lib/getUser';
type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const user: Promise<User> = await getUser(userId);
  const userData = await user;
  debugger;
  return (
    <div>
      <h3>User Info</h3>
      <ul>
        <p>{JSON.stringify(userData, null, 2)}</p>
      </ul>
    </div>
  );
}
