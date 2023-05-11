export async function generateMetadata(params: {}) {
  return {
    ...params,
    title: 'Posts PAge',
    description: 'Welcome to Posts Page',
  };
}

export default function PostsMain(props: {}) {
  console.log('AboutPage props : ', props);
  return (
    <div id='userPage'>
      <h3>Shopping Page</h3>
    </div>
  );
}
