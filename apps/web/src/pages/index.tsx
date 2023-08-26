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
import Link from "next/link";
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
	}, [router]);

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
				<Container className="mt-4">
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

			<Container className="h-[80px] w-full mt-4 relative group">
				<Container className="bg-component-background rounded-xl overflow-hidden">
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
				<Link
					href="/tasks"
					aria-label="Edit tasks"
					className="absolute -right-12 top-0 group-hover:opacity-50 opacity-0 hocus:!opacity-100 transition-opacity w-12 h-20 grid place-items-center rounded-md"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" className="w-5 h-5">
						<path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
						<path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
					</svg>
				</Link>
			</Container>
		</BoundaryContainer>
	);
};

export default LandingPage;
