import React from "react";
import type { DivElementProps } from "@memory/constants";
import { mergeClassNames } from "@memory/utils";

type ContainerProps = React.PropsWithChildren<DivElementProps>;

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
	const { className: inputClassName, ...rest } = props;
	const className = mergeClassNames("text-white", inputClassName);

	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
};
