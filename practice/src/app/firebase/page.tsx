import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";
import { portfolio } from "@/data/portfolio";

type Props = {};
let prova: boolean = false;

export default async function Firebase(props: Props) {
	/*
	try {
		if (!prova) {
			const docRef = await addDoc(collection(db, "portfolio"), portfolio);
			console.log("\x1b[36m%s%s\x1b[0m", "Document written with ID: ".padEnd(50), docRef.id);
			prova = true;
		}
	} catch (error) {
		console.log(error);
	}
	*/

	return (
		<main className="border m-2 p-2 min-h-screen">
			<h4>Firebase Page</h4>
		</main>
	);
}
