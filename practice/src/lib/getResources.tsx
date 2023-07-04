export const getResources = async <T,>(resourceName: ResourceName, id?: string): Promise<T | undefined> => {
	const baseURL: string = `https://jsonplaceholder.typicode.com/${resourceName}`;
	const url: string = id ? `${baseURL}/${id}` : baseURL;

	try {
		const response = await fetch(url, { next: { revalidate: 60 } });
		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		return response.json() as Promise<T>;
	} catch (error) {
		console.error(`Error fetching resources: ${error}`);
		return undefined;
	}
};
