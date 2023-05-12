type Props = {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function AnalyticsHome({ children }: Props) {
  return (
    <section className='bg-red-200'>
      <h3>Analytics Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        laboriosam id blanditiis omnis voluptates vero ullam dolor nisi repellat
        labore. Assumenda ratione, praesentium modi harum cumque expedita?
        Cupiditate, nesciunt debitis!
      </p>
      <div>{children}</div>
    </section>
  );
}
