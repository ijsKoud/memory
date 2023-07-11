import React, { useRef } from "react";
import type { DivElementProps } from "@memory/constants";
import { useDraggable } from "react-use-draggable-scroll";

export const HorizontalDragScrollContainer: React.FC<DivElementProps> = ({ children, ...props }) => {
	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);

	return (
		<div ref={ref} {...events} {...props}>
			{children}
		</div>
	);
};
