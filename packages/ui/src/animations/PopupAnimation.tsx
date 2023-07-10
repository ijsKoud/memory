import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
	/** Whether to show the item or not */
	visible: boolean;
}

export type PopupAnimationProps = React.PropsWithChildren<Props>;

export const PopupAnimation: React.FC<PopupAnimationProps> = ({ children, visible }) => {
	return (
		<AnimatePresence mode="sync">
			{visible && (
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{
						duration: 0.8,
						ease: [0, 0.71, 0.2, 1.01]
					}}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};
