import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


import { randomIcon, B, Heading } from '../../components';
import { IUser } from '../../model/interfaces/IUser'


interface IProps {
  user?: IUser
  prevUser?: string
  nextUser?: string
}

export const OneUser: FunctionComponent<IProps> = ({
  user,
  prevUser,
  nextUser,
}) => {
  const getRandomIndex = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min));
  }

  return (
    <>
      <div
        className="card mt-4"
        style={{
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <div
          className="d-flex justify-content-center py-3"
          style={{ background: "#b1d0fe" }}
        >
          {randomIcon(getRandomIndex(0, 4))}
        </div>
        <div className="card-body">
          <Heading
            as='h2'
            className="card-title"
          >
            {user?.name}
          </Heading>
          <p className="card-text fs-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat iste cum non obcaecati ab, laborum accusamus facilis vel nostrum exercitationem.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item fs-6">
            Username:&nbsp;
            <B>
              {user?.username}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Email:&nbsp;
            <B>
              {user?.email}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Phone:&nbsp;
            <B>
              {user?.phone}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Company name:&nbsp;
            <B>
              {user?.company.name}
            </B>
          </li>
          <li className="list-group-item fs-6">
            City:&nbsp;
            <B>
              {user?.address.city}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Street:&nbsp;
            <B>
              {user?.address.street}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Geo lat:&nbsp;
            <B>
              {user?.address.geo.lat}
            </B>
          </li>
          <li className="list-group-item fs-6">
            Geo lng:&nbsp;
            <B>
              {user?.address.geo.lng}
            </B>
          </li>
        </ul>
      </div>
      <div
        className={`
          d-flex 
          align-items-center 
          ${prevUser === '0' ?
            'justify-content-end' :
            'justify-content-between'}
          mt-4`
        }
      >
        {prevUser !== '0'
          && <Link
            to={`/users/${prevUser}`}
            className='btn btn-light'
          >
            <BsArrowLeft className='me-2' />
            Prev
          </Link>
        }
        {nextUser !== '0'
          && <Link
            to={`/users/${nextUser}`}
            className='btn btn-dark'
          >
            Next
            <BsArrowRight className='ms-2' />
          </Link>}
      </div>
    </>
  )
}
