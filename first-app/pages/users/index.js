export async function getStaticProps(params) {
  console.log("usersHome getStaticProps params : ", params);
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { users: data },
  };
}

// import info from "@/data/info.json";
export default function usersHome({ users }) {
  // console.log("users : ", users);

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
