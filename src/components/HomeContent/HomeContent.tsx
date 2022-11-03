import { FunctionComponent, useEffect, useState, } from "react";

import { Button } from "../../components";
import { ITranslation } from "../../model/interfaces";

import { translations } from "./translations";

export const HomeContent: FunctionComponent = () => {
	const [language, setLanguage] = useState<ITranslation>();

	const getTranslation = (lang: string,) => {
		const currentLanguage =
			translations.find((item) => item.language === lang);

		setLanguage(currentLanguage);
	};

	useEffect(() => {
		getTranslation("English");
	}, []);

	return (
		<>
			<div className='
			container-fluid 
			d-flex 
			justify-content-start 
			p-0
			mt-4
			'>
				<Button
					id='eng'
					className='btn me-4'
					onClick={() => getTranslation("English")}
				>
					English
				</Button>
				<Button
					id='rus'
					className='btn me-4'
					onClick={() => getTranslation("Russian")}
				>
					Russian
				</Button>
				<Button
					id='ukr'
					className='btn'
					onClick={() => getTranslation("Ukraine")}
				>
					Ukraine
				</Button>
			</div>
			<p className='mt-4'>
				{language?.header}
			</p>
			<div className='text-start container-fluid p-0'>
				{language?.body}
			</div>
			<ol className='p-0 mt-3'>
				{language?.items.map((item, idx) =>
					<li key={idx}>
						{item}
					</li>
				)}
				<li>
				</li>
			</ol>
		</>
	);
};
