type Props = { params: {}; searchParams: {} };

export default function NotFound(params: Props) {
  return (
    <>
      <h2>Not Found</h2>
      <p>could not found the requested resource</p>
    </>
  );
}