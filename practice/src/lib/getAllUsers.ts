async function getAllUsers(): Promise<any> {
  const baseURL: string = 'https://jsonplaceholder.typicode.com/';
  const response = await fetch(baseURL, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error('Error Fetching Data');

  return response.json();
}
