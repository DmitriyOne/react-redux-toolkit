import { FunctionComponent, ReactNode } from "react";

import { motion } from "framer-motion";

interface IProps {
  children?: ReactNode
}

export const AnimatedPage: FunctionComponent<IProps> = ({
	children,
}) => {
	const animations = {
		initial: { opacity: 0, x: 100 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: -100 },
	};

	return (
		<motion.main
			variants={animations}
			initial='initial'
			animate='animate'
			exit='exit'
			transition={{ duration: .3 }}
			className='
      main
      mb-4
      pb-4
      d-flex 
      flex-column
      justify-content-center  
      align-items-center
      mx-auto
      '>
			{children}
		</motion.main>
	);
};
