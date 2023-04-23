export default async function getUserPosts(userId: string) {
  const url: string = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await fetch(url);
  if (!response.ok) return undefined;
  return response.json();
}
