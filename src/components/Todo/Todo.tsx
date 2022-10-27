import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react'

import { useAppActions, useAppSelector, useLocalStorage } from '../../hooks'
import { ITodo } from '../../model/interfaces'

import { Input, Button } from '../../components'

import { TodoItem } from './TodoItem'

export const Todo: FunctionComponent = () => {
  const [value, setValue] = useState('')
  // const [todoss, setTodos] = useState<ITodo[]>([])
  let todos = useAppSelector(state => state.todo)
  // const [todosLS, setTodosLS] = useLocalStorage<ITodo[]>('todo', todoss)
  const { addMyTodo, toggleCompletedTodo, removeTodo } = useAppActions()

  // useEffect(() => {
  //   const newEl = JSON.parse(localStorage.getItem('todo') || '{}');
  //   console.log(newEl);
  // }, [])

  console.log(todos);


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
    // setTodos([...todoss, todo])
    // setTodosLS([...todosLS, todo])
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
