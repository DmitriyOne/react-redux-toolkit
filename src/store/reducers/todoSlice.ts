import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo, ITodoArray } from "../../model/interfaces";

// const todos = JSON.parse(localStorage.getItem('todo') || '{}');

const initialState: ITodoArray = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'myTodo',
  initialState,
  reducers: {
    addMyTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
      // localStorage.setItem('todo', JSON.stringify(state.todos));
    },
    toggleCompletedTodo: (state, action: PayloadAction<string>) => {
      const toggleTodo = state.todos.find(todo => todo.id === action.payload)
      toggleTodo!.completed = !toggleTodo!.completed
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      // const todosLS: ITodo[] = JSON.parse(localStorage.getItem('todo') || '{}');
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      // localStorage.setItem('todo', JSON.stringify(state.todos));
    }
  },
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer
