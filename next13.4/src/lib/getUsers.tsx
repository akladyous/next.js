export const getUsers = async (user_id?: string) => {
  const baseURL: string = 'https://jsonplaceholder.typicode.com/users';
  const url: string = user_id ? baseURL.concat('/', user_id) : baseURL;
  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) return undefined;
  return response.json();
};
