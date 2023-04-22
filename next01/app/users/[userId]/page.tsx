import getUser from '@/lib/getUser';
type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const user: Promise<User> = getUser(userId);
  const userData = await user;

  return (
    <div>
      <h3>User Info</h3>
      <div>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>
    </div>
  );
}
