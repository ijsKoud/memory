/**
 * Merges a set of classnames together
 * @param classnames The classnames to merge
 * @returns
 */
export function mergeClassNames(...classnames: (string | null | undefined)[]): string {
	return classnames.filter(Boolean).join(" ");
}
