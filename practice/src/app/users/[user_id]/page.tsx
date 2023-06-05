import { getResources } from "@/lib/getResources";
import { getUser } from "@/lib/getUser";
import isNumber from "is-number";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["greek"] });

console.log(isNumber);

type UserPageProps = {
	params: { user_id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export default async function UserPage({ params: { user_id } }: UserPageProps) {
	if (!isNumber(user_id)) {
		return (
			<>
				<p>
					<span className=" text-red-600">{user_id}</span> is not a valid user id format
				</p>
			</>
		);
	}

	// const userData: Promise<User> = await getUser(user_id);
	// const user = await userData;

	const usersData: Promise<User | undefined> = getResources("users", user_id);
	const postsPostsData: Promise<Post[] | undefined> = getResources("posts");

	const [user, posts] = await Promise.all([usersData, postsPostsData]);

	console.log("");
	console.log("\x1b[36m%s%s\x1b[0m", "UserHome user_id : ".padEnd(50), user_id);

	return (
		<section>
			<pre>
				<code className={roboto.className.concat("text-blue-500")}>{JSON.stringify(user, null, 2)}</code>
			</pre>
		</section>
	);
}
