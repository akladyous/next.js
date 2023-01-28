export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { users: data },
  };
}

export default function usersHome({ users }) {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p> 2<p>{user.email}</p> 2
          </div>
        );
      })}
    </div>
  );
}
