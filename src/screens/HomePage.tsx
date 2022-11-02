import { FunctionComponent } from "react";

import { AnimatedPage, Heading, HomeContent } from "../components";

export const HomePage: FunctionComponent = () => {
	return (
		<AnimatedPage>
			<Heading align='center'>
				Home Page
			</Heading>
			<HomeContent />
		</AnimatedPage>
	);
};
