import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom';

import { Spinner, Error, Breadcrumb, OneUser } from '../components';

import { usersAPI } from '../services';

export const UserPage: FunctionComponent = () => {
  const params = useParams();
  const { data: user, isError, isLoading } = usersAPI.useGetUserQuery(params.id!)
  const { data: users } = usersAPI.useFetchAllUsersQuery(undefined)

  let prevUser = ''
  let nextUser = ''

  if (user?.id === 1) {
    prevUser = '0'
  } else {
    prevUser = (user?.id! - 1).toString()
  }

  if (user?.id === users?.length) {
    nextUser = '0'
  } else {
    nextUser = (user?.id! + 1).toString()
  }

  return (
    <div>
      <Breadcrumb currentPage={user?.name} />
      {isError && <Error />}
      {isLoading && <Spinner />}
      <OneUser
        user={user}
        prevUser={prevUser}
        nextUser={nextUser}
      />
    </div>
  )
}
