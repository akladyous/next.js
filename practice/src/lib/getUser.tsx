export const getUser = async (userId: string): Promise<any> => {
	const url: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
	const response = await fetch(url, {
		next: { revalidate: 60 },
	});

	if (!response.ok) return undefined;
	return response.json();
};
