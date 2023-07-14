import React, { useRef } from "react";
import type { DivElementProps } from "@memory/constants";
import { useDraggable } from "react-use-draggable-scroll";
import { mergeClassNames } from "@memory/utils";

export const HorizontalDragScrollContainer: React.FC<DivElementProps> = ({ children, className, ...props }) => {
	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<div
			ref={ref}
			{...events}
			{...props}
			className={mergeClassNames("scrollbar-track-zinc-800 scrollbar-thumb-zinc-900 scrollbar-thin", className)}
		>
			{children}
		</div>
	);
};
