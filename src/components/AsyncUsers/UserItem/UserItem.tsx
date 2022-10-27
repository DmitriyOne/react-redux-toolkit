import { FunctionComponent } from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import { Button } from '../../Button'
import { InputCheckbox } from '../../Input'

export const UserItem: FunctionComponent = () => {
  return (
    <ul className='list-group container-fluid'>
      <li className='list-group-item d-flex justify-content-between  align-items-center p-0 pe-3'>
        <span className='d-flex align-items-center'>
          <InputCheckbox />
          TodoItem 1
        </span>
        <Button>
          <XCircleFill
            fill='#dc3545'
            width={25}
            height={25}
          />
        </Button>
      </li>
    </ul>
  )
}
