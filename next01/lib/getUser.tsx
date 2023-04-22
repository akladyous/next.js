export default async function getUser(userId: string, options?: {}) {
  var response: Response;
  debugger;
  try {
    const url: string = `https://jsonplaceholder.typicode.com/user/${userId}`;
    response = await fetch(url);

    return response.json();
  } catch (error) {
    console.log('error : ', error);
    return error;
  }
}
