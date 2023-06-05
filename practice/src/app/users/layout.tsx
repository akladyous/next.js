import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metaData: Metadata = {
	title: "Data Fetching",
	description: "Next.JS data feching page",
};

export default function FetchLayout(props: LayoutProps) {
	const { children } = props;
	return <main className={"border-sky-200 border min-h-screen m-5 p-5 ".concat(roboto.className)}>{children}</main>;
}
