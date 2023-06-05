type UserPostsProps = {
	promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: UserPostsProps) {
	const posts = await promise;

	return (
		<article>
			{posts.map((post) => (
				<div key={post.id}>
					<p>{post.title}</p>
				</div>
			))}
		</article>
	);
}
