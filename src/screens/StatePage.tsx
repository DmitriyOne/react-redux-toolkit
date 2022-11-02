import { FunctionComponent } from "react";
import { AnimatedPage, Heading, StateChange } from "../components";

export const StatePage: FunctionComponent = () => {
	return (
		<AnimatedPage>
			<Heading align='center'>
        State Page
			</Heading>
			<StateChange />
		</AnimatedPage>
	);
};
