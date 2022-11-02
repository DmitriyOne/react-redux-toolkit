import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import { MenuLinks } from "../../../constans/menu";

export const Menu: FunctionComponent = () => (
	<ul className='
      d-flex 
      navbar-nav 
      flex-row 
      hstack 
      gap-3
    '>
		{MenuLinks.map((item, idx) =>
			<li
				key={idx}
				className='nav-item'
			>
				<NavLink
					to={item.href}
					className='nav-link text-white'
				>
					{item.text}
				</NavLink>
			</li>
		)}
	</ul>
);
