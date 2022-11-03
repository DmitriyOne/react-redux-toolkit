import React, { FunctionComponent } from "react";

import { B } from "../../B";

interface IProps {
	firstName?: string
}

export const FirstName: FunctionComponent<IProps> = ({
	firstName
}) => {
	return (
		<span>
			Name: <B> {firstName} </B>
		</span>
	);
};
