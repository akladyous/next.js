export const getUser = async (user_id: string) => {
	console.log("user_id : ", user_id);
	const url: string = `https://jsonplaceholder.typicode.com/users/${user_id}`;
	const response = await fetch(url, {
		next: { revalidate: 60 },
	});

	if (!response.ok) return undefined;
	return response.json();
};
