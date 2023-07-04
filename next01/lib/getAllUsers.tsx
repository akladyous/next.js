export default async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });

  if (!response.ok) return undefined;

  return response.json();
}
