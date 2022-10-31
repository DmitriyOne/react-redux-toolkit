import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'

import { useAppActions, useAppSelector } from '../../hooks'
import { ITodo } from '../../model/interfaces'

import { Input, Button } from '../../components'
import { TodoItem } from './TodoItem'
import classNames from 'classnames'

export const Todo: FunctionComponent = () => {
  const [value, setValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  let todos = useAppSelector(state => state.todo)
  const { addMyTodo, toggleCompletedTodo, removeTodo } = useAppActions()

  useEffect(() => {
    if (value.length >= 3) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [value])

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    const todo: ITodo = {
      id: new Date().getTime().toString(),
      title: value,
      completed: false
    }
    if (value.length > 3) {
      addMyTodo(todo)
      setValue('')
      setIsDisabled(true)
    }
  }

  const onToggleTodo = (id: string) => {
    toggleCompletedTodo(id)
  }

  const onRemoveTodo = (id: string) => {
    removeTodo(id)
  }

  return (
    <>
      <div className='d-flex container-fluid align-items-end'>
        <Input
          labelText='Create your todo'
          placeholder='Buy crypto'
          value={value}
          onChange={handleValue}
        />
        <Button
          className={classNames(
            'btn btn-dark ms-4 text-nowrap',
            isDisabled ? 'disabled' : ''
          )}
          onClick={() => addTodo()}
        >
          Add new todo
        </Button>
      </div>
      <ul className='list-group container-fluid mt-4'>
        {todos.todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={onToggleTodo}
            onRemove={onRemoveTodo}
          />
        )}
      </ul>
    </>
  )
}
