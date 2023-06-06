"use client";
import { useState } from "react";
import type { ChangeEvent } from "react";

export default function Search(params: {}) {
	const [query, setQuery] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		setQuery(e.target.value);
	}

	return (
		<main className="border m-2 p-2 min-h-screen">
			<div>
				<form>
					<input type="text" name="search" value={query} onChange={handleChange} />
				</form>
			</div>
		</main>
	);
}
