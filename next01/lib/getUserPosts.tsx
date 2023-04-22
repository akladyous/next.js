export default async function getUserPosts(userId: string) {
  const url: string = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('error Fetching user Posts');
  }
  return response.json();
}
