import { configureStore } from '@reduxjs/toolkit'
import drinkReducer from '../features/drinks/drinkSlice'

export const store = configureStore({
  reducer: {
    drinks: drinkReducer
  }
})
