export const getResource = async (
  resource: Resources,
  id: string,
): Promise<any> => {
  if (!resource) return undefined;

  const baseURL: string = 'https://jsonplaceholder.typicode.com/';
  baseURL.concat(Resources[resource].toLowerCase(), '/');

  if (id) {
    baseURL.concat('/', id);
  }

  const response = await fetch(baseURL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) return undefined;
  return response.json();
};
