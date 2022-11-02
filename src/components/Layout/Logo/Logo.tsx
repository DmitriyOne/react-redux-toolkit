import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { REACT_ROUTS } from "../../../constans/routes";

export const Logo: FunctionComponent = () => (
	<Link
		to={REACT_ROUTS.HOME}
		className='navbar-brand text-white'
	>
    React Toolkit
	</Link>
);
