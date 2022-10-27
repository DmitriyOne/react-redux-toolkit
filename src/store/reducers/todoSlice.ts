import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo, ITodoArray } from "../../model/interfaces";

const initialState: ITodoArray = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'myTodo',
  initialState,
  reducers: {
    addMyTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload)
    },
    toggleCompletedTodo: (state, action: PayloadAction<string>) => {
      const toggleTodo = state.todos.find(todo => todo.id === action.payload)
      toggleTodo!.completed = !toggleTodo!.completed
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  },
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer
