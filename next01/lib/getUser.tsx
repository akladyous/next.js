export default async function getUser(userId: string, options?: {}) {
  var response: Response;
  if (userId === '') throw new Error('Missing User ID');
  try {
    const url: string = `https://jsonplaceholder.typicode.com/users/${userId}`;
    response = await fetch(url);
    if (!response.ok) return undefined;
    return response.json();
  } catch (error) {
    console.log('error : ', error);
    return undefined;
  }
}
