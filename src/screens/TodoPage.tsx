import { FunctionComponent } from "react";

import { Todo, Heading, AnimatedPage } from "../components";

export const TodoPage: FunctionComponent = () => {
	return (
		<AnimatedPage>
			<Heading align='center' className='mb-4'>
        My Todo
			</Heading>
			<Todo />
		</AnimatedPage>

	);
};
