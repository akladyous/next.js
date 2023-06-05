import { getResources } from "@/lib/getResources";
import { getUser } from "@/lib/getUser";
import isNumber from "is-number";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import UserPosts from "./component/UserPosts";
import { Metadata } from "next";
const roboto = Roboto({ weight: "500", subsets: ["greek"] });

console.log(isNumber);

type UserPageProps = {
	params: { userId: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { userId } }: UserPageProps): Promise<Metadata> {
	const userData: Promise<User | undefined> = getResources("users", userId);
	const user: User | undefined = await userData;

	return {
		title: user?.name,
		description: user?.email,
	};
}

export default async function UserPage({ params: { userId } }: UserPageProps) {
	if (!isNumber(userId)) {
		return (
			<>
				<p>
					<span className=" text-red-600">{userId}</span> is not a valid user id format
				</p>
			</>
		);
	}

	// const userData: Promise<User> = await getUser(userId);
	// const user = await userData;

	// const usersData: Promise<User | undefined> = getResources("users", userId);
	// const postsPostsData: Promise<Post[] | undefined> = getResources("posts");

	// Parallel Data Fetching
	// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#parallel-data-fetching
	// const [user, posts] = await Promise.all([usersData, postsPostsData]);

	const user: User | undefined = await getResources("users", userId);
	const userPosts: Promise<Post[]> = getResources("posts");

	console.log("");
	console.log("\x1b[36m%s%s\x1b[0m", "UserHome userId : ".padEnd(50), userId);

	return (
		<section className="p-2">
			<div className="border mb-2">
				<h3 className="text-glue-700">{user?.name}</h3>
			</div>
			{userPosts ? (
				<div className="border ">
					<Suspense fallback={<h3>Loading...</h3>}>
						<UserPosts promise={userPosts} />
					</Suspense>
				</div>
			) : null}
		</section>
	);
}
