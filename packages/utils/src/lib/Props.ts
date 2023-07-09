/**
 * Merges 2 classnames together
 * @param fixedClassName The component provided classname
 * @param inputClassName The classname provided via input
 * @returns
 */
export function mergeClassNames(fixedClassName: string, inputClassName?: string | null): string {
	return inputClassName ? `${fixedClassName} ${inputClassName}` : fixedClassName;
}
