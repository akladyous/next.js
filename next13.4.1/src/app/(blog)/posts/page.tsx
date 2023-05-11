export async function generateMetadata(params: {}) {
  return {
    ...params,
    title: 'Posts Page',
    description: 'Welcome to Posts Page',
  };
}

export default function PostsMain(props: {}) {
  console.log('AboutPage props : ', props);
  return (
    <div id='userPage'>
      <h3>Posts Home Page</h3>
    </div>
  );
}
