import { FunctionComponent, useState } from "react";

import { usersAPI } from "../../services";

import { Error, Spinner, Button } from "../../components";

import { UserItem } from "./UserItem";

export const AsyncUsers: FunctionComponent = () => {
	const [limit, setLimit] = useState<number>(3);
	const {
		data: users,
		isError,
		isLoading
	} = usersAPI.useFetchAllUsersQuery(limit);

	const handleClick = () => {
		setLimit(limit + 1);
	};

	if (isError) {
		return <Error />;
	}

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<ul className='list-group container-fluid'>
				{users?.map(user => {

					return (
						< UserItem
							key={user.id}
							user={user}
						/>
					);
				}
				)}
			</ul>
			<Button
				className='btn btn-dark mt-4 text-nowrap mx-auto'
				style={{ display: "block" }}
				onClick={handleClick}
			>
				Load more
			</Button>
		</>
	);
};
