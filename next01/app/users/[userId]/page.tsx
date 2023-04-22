import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
type Params = {
  params: {
    userId: string;
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userDataPromise: Promise<User> = getUser(userId);
  const userPostsDataPromise: Promise<Post[]> = getUserPosts(userId);

  // const [user, userPosts] = await Promise.all([userDataPromise, userPostsDataPromise]);
  const user = await userDataPromise;

  return (
    <div>
      <h3>{user.name}</h3>
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <br />
      <div>
        <Suspense fallback={<h3>Loading...</h3>}>
          {/* @ts-expect-error Async Server Component */}
          <UserPosts promise={userPostsDataPromise} />
        </Suspense>
      </div>
    </div>
  );
}
