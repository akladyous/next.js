export const getPosts = async (postId: string): Promise<Post[] | undefined> => {
	const url: string = `https://jsonplaceholder.typicode.com/posts/${postId}`;
	const response = await fetch(url, { next: { revalidate: 30 } });
	if (!response.ok) return undefined;
	return response.json();
};
