import { configureStore } from '@reduxjs/toolkit'
import counter from '../reduce/counter/counter'

export const store = configureStore({
  reducer: {
    counter:counter
  },
})