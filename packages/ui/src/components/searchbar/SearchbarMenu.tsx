import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "../../blocks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { HTTPLESS_URL, HTTP_URL } from "@memory/constants";
import { useRouter } from "next/router";

interface SearchbarMenuProps {
	/** The user input */
	input: string;
}

export const SearchbarMenu: React.FC<SearchbarMenuProps> = ({ input }) => {
	const isUrl = structuredClone(HTTPLESS_URL).test(input) || structuredClone(HTTP_URL).test(input);
	const googleUrl = `https://google.com/search?q=${encodeURIComponent(input)}`;
	const router = useRouter();

	useEffect(() => {
		const handler = (ev: KeyboardEvent) => {
			if (ev.key !== "Enter") return;

			const url = structuredClone(HTTP_URL).test(input) ? input : `https://${input}`;
			void router.push(isUrl ? url : googleUrl);
		};

		window.addEventListener("keypress", handler);
		return () => window.removeEventListener("keypress", handler);
	}, []);

	return (
		<Container role="menu" className="z-10 absolute mt-4 p-4 rounded-xl w-full bg-component-background flex flex-col gap-4">
			{isUrl && (
				<Link href={input} className="flex w-full items-center justify-between">
					<p>{input}</p>
					<p className="text-zinc-500">{input.split("/")[0]}</p>
				</Link>
			)}
			<Link href={googleUrl} className="flex w-full items-center justify-between">
				<p>{input}</p>
				<p>
					<FontAwesomeIcon icon={faGoogle} /> Search on Google
				</p>
			</Link>
		</Container>
	);
};
