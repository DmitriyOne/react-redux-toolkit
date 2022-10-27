import { ChangeEvent, FunctionComponent, useState } from 'react'

import { useAppActions, useAppSelector } from '../../hooks'
import { ITodo } from '../../model/interfaces'

import { Input, Button } from '../../components'
import { TodoItem } from './TodoItem'

export const Todo: FunctionComponent = () => {
  const [value, setValue] = useState('')
  let todos = useAppSelector(state => state.todo)
  const { addMyTodo, toggleCompletedTodo, removeTodo } = useAppActions()

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const addTodo = () => {
    const todo: ITodo = {
      id: new Date().getTime().toString(),
      title: value,
      completed: false
    }
    addMyTodo(todo)
    setValue('')
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
          className='btn btn-dark ms-4 text-nowrap'
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
