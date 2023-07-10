import { BoundaryContainer, Button, Clock, Container, FullScreenClock, PopupAnimation, Searchbar, WelcomeTitle } from "@memory/ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LandingPage: NextPage = () => {
	const router = useRouter();
	const [clock, setClock] = useState(false);

	const clockButtonClick = () => {
		setClock(!clock);
		void router.push(clock ? "/" : "/#clock");
	};

	useEffect(() => {
		setClock(location.hash === "#clock");
	}, []);

	return (
		<BoundaryContainer className="pt-16 w-full">
			<Container className="w-full flex items-center justify-between">
				<WelcomeTitle name="Daan" />
				<Button
					onClick={clockButtonClick}
					aria-label="Open the clock to full-screen"
					className="focus:outline-indigo-600 outline outline-transparent rounded-md"
				>
					<Clock />
				</Button>
			</Container>

			<Container className="mt-6">
				<Searchbar />
			</Container>

			<PopupAnimation
				visible={clock}
				onClick={clockButtonClick}
				role="button"
				aria-label="Close clock"
				className="fixed z-10 w-screen h-screen top-0 left-0 grid place-items-center bg-black/50 backdrop-blur-md"
			>
				<FullScreenClock />
			</PopupAnimation>
		</BoundaryContainer>
	);
};

export default LandingPage;
