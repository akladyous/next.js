export async function generateMetadata(params: {}) {
  return {
    ...params,
    title: 'Tags Page',
    description: 'Welcome to Tags Page',
  };
}

export default function TagsHome(props: {}) {
  console.log('AboutPage props : ', props);
  return (
    <div id='userPage'>
      <h3>Tags Page</h3>
    </div>
  );
}
