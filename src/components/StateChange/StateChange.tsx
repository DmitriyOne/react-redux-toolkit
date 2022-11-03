import { ChangeEvent, FunctionComponent } from "react";

import { useAppActions, useAppSelector } from "../../hooks";

import { Input } from "../../components";
import { FirstName } from "./FirstName";
import { LastName } from "./LastName";

export const StateChange: FunctionComponent = () => {
	const { firstName, lastName } = useAppSelector(state => state.stateInput);
	const { getFirstName, getLastName } = useAppActions();

	const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
		getFirstName(e.target.value);
	};

	const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
		getLastName(e.target.value);
	};

	return (
		<div className='container-fluid'>
			<Input
				componentClassName='mb-4'
				labelText='Name'
				placeholder='Ivan'
				onChange={handleChangeFirstName}
			/>
			<Input
				labelText='Surname'
				placeholder='Ivanov'
				onChange={handleChangeLastName}
			/>
			<div className='d-flex flex-column align-items-start mt-5'>
				<FirstName firstName={firstName} />
				<LastName lastName={lastName} />
			</div>
		</div>
	);
};
