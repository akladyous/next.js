export default async function delay(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('delay function');
      resolve({ user_id: 1 });
    }, timeout);
  });
}
