import React from "react";
import type { DivElementProps } from "@memory/constants";
import { mergeClassNames } from "@memory/utils";

type BoundaryContainerProps = React.PropsWithChildren<DivElementProps>;

export const BoundaryContainer: React.FC<BoundaryContainerProps> = ({ children, ...props }) => {
	const { className: inputClassName, ...rest } = props;
	const className = mergeClassNames("max-w-5xl px-4", inputClassName);

	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
};
