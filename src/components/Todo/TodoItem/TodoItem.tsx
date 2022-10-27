import { FunctionComponent } from 'react'
import { XSquareFill } from 'react-bootstrap-icons'

import { ITodo } from '../../../model/interfaces'
import { InputCheckbox, Button } from '../..'
import classNames from 'classnames'

interface IProps {
  todo?: ITodo
  onChange?: (id: string) => void
  onRemove?: (id: string) => void
}

export const TodoItem: FunctionComponent<IProps> = ({
  todo,
  onChange,
  onRemove,
}) => (
  <li
    className='
            list-group-item 
            d-flex 
            justify-content-between  
            align-items-center 
            p-0 
            pe-3
        '>
    <span className={classNames(
      'd-flex align-items-center',
      todo?.completed ? 'text-decoration-line-through' : ''
    )} >
      <InputCheckbox
        checked={todo?.completed}
        onChange={() => onChange!(todo!.id)}
      />
      {todo?.title}
    </span>
    <Button onClick={() => onRemove!(todo!.id)}>
      <XSquareFill
        fill='#dc3545'
        width={20}
        height={20}
      />
    </Button>
  </li>
)
