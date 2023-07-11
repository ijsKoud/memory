import {
	BoundaryContainer,
	Button,
	Clock,
	Container,
	FullScreenClock,
	HorizontalDragScrollContainer,
	PopupAnimation,
	Searchbar,
	TaskItem,
	WelcomeTitle
} from "@memory/ui";
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

			<Container>
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
			</Container>

			<Container className="test h-[80px] w-full bg-component-background mt-4 rounded-xl overflow-hidden">
				<HorizontalDragScrollContainer className="flex items-center gap-2 p-2 overflow-x-auto">
					<TaskItem
						icon="https://img.icons8.com/fluency/48/bagel.svg"
						alt="Glass of water icon"
						title="Eat your food!"
						completed={3}
						total={3}
						background="#F6CF44"
					/>
					<TaskItem
						icon="https://img.icons8.com/fluency/48/sparkling-water.svg"
						alt="Glass of water icon"
						title="Drink water"
						completed={2}
						total={6}
						background="#44A1F6"
					/>
					<TaskItem
						icon="https://img.icons8.com/fluency/48/pets.svg"
						alt="Glass of water icon"
						title="Take care of cats"
						completed={0}
						total={2}
						background="#bf6614"
					/>
					<TaskItem
						icon="https://img.icons8.com/fluency/48/waste--v1.svg"
						alt="icon"
						title="Take out the garbage"
						completed={0}
						total={1}
						background="#169157"
					/>
				</HorizontalDragScrollContainer>
			</Container>
		</BoundaryContainer>
	);
};

export default LandingPage;
