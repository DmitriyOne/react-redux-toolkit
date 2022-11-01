import { FunctionComponent } from 'react'

import { IUser } from '../../../model/interfaces/IUser'

import { randomIcon } from '../../../components'
import { Link } from 'react-router-dom'

interface IProps {
  user: IUser
}

export const UserItem: FunctionComponent<IProps> = ({
  user
}) => {
  const getRandomIndex = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min));
  }
  return (
    <li className='
      list-group-item 
      d-flex
      flex-column 
      justify-content-between  
      align-items-center 
      py-2 
      px-3
    '>
      <div className='mb-2'>
        {randomIcon(getRandomIndex(0, 5))}
      </div>
      <Link
        to={`/users/${user.id}`}
      >
        <b>
          {user.name}
        </b>
      </Link>
      <small
        style={{ lineHeight: '100%', fontSize: '12px' }}
      >
        {user.phone}
      </small>
    </li>
  )
}
