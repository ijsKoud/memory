import React, { useState } from "react";
import { Button } from "../Button";
import { Container } from "../blocks";
import _ from "lodash";

export interface TaskItemProps {
	/** The amount of times the task has to be completed today */
	total: number;

	/** The amount of times the user completed this task */
	completed: number;

	/** The name of the task */
	title: string;

	/** The background color */
	background: string;

	/** The task icon */
	icon: string;

	/** The text description of the icon */
	alt: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({ total, completed: _completed, title, background, icon, alt }) => {
	const [completed, setCompleted] = useState(_completed);
	const incrementCompleted = () => {
		const incremented = completed + 1;
		if (incremented <= total) setCompleted(incremented);
	};

	return (
		<Button
			aria-label={`Complete task: ${title}`}
			onClick={incrementCompleted}
			className="bg-gradient-to-r rounded-lg max-w-[350px] p-2 flex items-center w-fit"
			style={{
				// @ts-expect-error Variables aren't covered by TypeScript types
				"--tw-gradient-stops":
					completed === total
						? `${background} 0%, ${background} 100%`
						: `${background} 0%, #242424 ${(completed / total) * 100}%, #242424 100%`
			}}
		>
			<img src={icon} alt={alt} height={48} width={48} className="min-h-[48px] min-w-[48px]" />
			<Container className="flex flex-col items-start w-full">
				<span className="whitespace-nowrap">{_.truncate(title, { length: 32 })}</span>
				<span className="text-zinc-500 font-semibold text-4" aria-label={`${completed} out of ${total}`}>
					{completed}/{total}
				</span>
			</Container>
		</Button>
	);
};
