type Props = {
  children: React.ReactNode;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Team({ children }: Props) {
  return (
    <section className=' bg-blue-200'>
      <h3>Team Page</h3>
      <div>{children}</div>
    </section>
  );
}
