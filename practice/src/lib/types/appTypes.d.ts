type LayoutProps = {
	children: React.ReactNode;
	props: {};
};
type ComponentParams = {
	params: { [key: string]: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

type ResourceName = "posts" | "comments" | "albums" | "photos" | "todos" | "users";

enum ResourcesEnum {
	POSTS,
	COMMENTS,
	ALBUMS,
	PHOTOS,
	TODOS,
	USERS,
}

//
type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

//
type User = {
	id: number;
	name: string;
	userName: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};
