export async function generateMetadata(params: {}) {
  return {
    ...params,
    title: 'Shopping Page',
    description: 'Welcome to Shopping Page',
  };
}

export default function ShoppingPage(props: {}) {
  console.log('AboutPage props : ', props);
  return (
    <div id='userPage'>
      <h3>Shopping Page</h3>
    </div>
  );
}
