import { FunctionComponent } from "react";

import { SOCIAL_ROUTES } from "../../../constans/routes";

export const Footer: FunctionComponent = () => (
	<footer className='
      mt-auto 
      container-fluid 
      py-3
      border-top
    '>
		<div className='
        container 
        footer-row 
        d-flex 
        justify-content-between 
        align-items-center
      '>
			<span>
        Copyright © 2022
			</span>
			<a
				href={SOCIAL_ROUTES.INSTAGRAM}
				target='_blank'
				rel='noreferrer'
			>
        Dima F.
			</a>
		</div>
	</footer>
);
