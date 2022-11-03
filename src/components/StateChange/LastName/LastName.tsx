import React, { FunctionComponent } from "react";

import { B } from "../../B";

interface IProps {
	lastName?: string
}

export const LastName: FunctionComponent<IProps> = ({
	lastName
}) => {
	return (
		<span>
			Surname: <B> {lastName} </B>
		</span>
	);
};
