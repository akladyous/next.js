import React from 'react';

export default async function getAllUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error('failed to fech data');

  return response.json();
}
