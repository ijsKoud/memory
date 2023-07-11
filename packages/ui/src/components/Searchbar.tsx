import React, { useState, type FormEvent } from "react";
import { Container } from "../blocks";
import { SearchbarMenu } from "./searchbar/SearchbarMenu";
import { PopupAnimation } from "../animations";

export const Searchbar = () => {
	const [showModal, setShowModal] = useState(false);
	const [input, setInput] = useState("");

	const onInput = (event: FormEvent<HTMLInputElement>) => {
		const newInput = event.currentTarget.value;
		setInput(newInput);
		setShowModal(Boolean(newInput));
	};

	return (
		<Container className="w-full relative">
			<input
				className="w-full h-12 rounded-xl bg-component-background px-4"
				type="text"
				name="Search the web"
				id="search"
				placeholder="What are you looking for today?"
				aria-label="Search the web, access bookmarks and more."
				onInput={onInput}
			/>
			<PopupAnimation visible={showModal}>
				<SearchbarMenu input={input} />
			</PopupAnimation>
		</Container>
	);
};
