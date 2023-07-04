export const getAllUsers = async () => {
  const url: string = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) return undefined;
  return response.json();
};
