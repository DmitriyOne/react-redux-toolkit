import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { REACT_ROUTS } from '../../constans/routes'

interface IProps {
  currentPage?: string
}

export const Breadcrumb: FunctionComponent<IProps> = ({
  currentPage,
}) => {
  return (
    <nav
      style={{ width: '100%', maxWidth: '500px' }}
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={REACT_ROUTS.HOME}>
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={REACT_ROUTS.USERS}>
            All users
          </Link>
        </li>
        <li
          className="breadcrumb-item active"
          aria-current="page"
        >
          {currentPage}
        </li>
      </ol>
    </nav>
  )
}
