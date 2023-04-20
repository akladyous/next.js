import info from "@/data/info.json";

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log("context : ", context);
  return {
    props: { user: { ...info } },
  };
}

export default function User({ user }) {
  // console.log("user : ", user);
  // console.log(info);
  return (
    <div>
      <p>{user.name}</p>
    </div>
  );
}
