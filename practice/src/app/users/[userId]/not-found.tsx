import Link from "next/link";

export default function NotFound(props: {}) {
	return (
		<div>
			<p>Could not find requested user</p>
			<Link href="/">home page</Link>
		</div>
	);
}
