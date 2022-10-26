import { configureStore } from '@reduxjs/toolkit'

import {stateInputReducer} from './reducers/stateSlice'

export const store = configureStore({
  reducer: {
    stateInput: stateInputReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
