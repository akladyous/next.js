"use client";
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

export default function Search(params: {}) {
	const [query, setQuery] = useState("");

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		setQuery(e.target.value);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {}

	return (
		<main className="w-1/2 border rounded-lg p-2 m-2 min-h-screen mx-auto">
			<h3 className="text-center">Wiki Search</h3>
			<form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="query" className="block text-sm font-medium leading-6 text-gray-900 capitalize">
						Search
					</label>
					<div className="mt-2 flex items-center">
						<input
							id="query"
							name="query"
							type="text"
							value={query}
							onChange={handleChange}
							className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder:mx-2 placeholder:capitalize placeholder:text-[.8rem] placeholder:px-2 px-2"
							placeholder=" search keywords"
						/>
						<SearchSVG />
					</div>
				</div>
			</form>
		</main>
	);
}

const SearchSVG = () => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
		<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
	</svg>
);
