import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import drinkService from '../../services/drinks'

const initialState = {
  drinks: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async () => {
  const drinks = await drinkService.getAlldrinks()
    .then((response) => {
      return response
    })
  return drinks
})

export const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    editDrink: (state, action) => {
      const { id, title, description, ingredients, image } = action.payload
      const foundDrink = state.drinks.find(drink => drink.id === id)
      if (foundDrink) {
        foundDrink.title = title
        foundDrink.description = description
        foundDrink.ingredients = ingredients
        foundDrink.image = image
      }
    },
    deleteDrink: (state, action) => {
      const foundDrink = state.drinks.find((drink) => drink.id === action.payload)
      if (foundDrink) {
        state.drinks.splice(state.drinks.indexOf(foundDrink), 1)
      }
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchDrinks.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDrinks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.drinks = state.drinks.concat(action.payload)
      })
      .addCase(fetchDrinks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllPosts = (state) => state.drinks.drinks
export const getPostsStatus = (state) => state.drinks.status
export const getPostsError = (state) => state.drinks.error

export const selectPostById = (state, postId) =>
  state.drinks.drinks.find(post => post.id === postId)

export const { initialDrinks, editDrink, deleteDrink } = drinkSlice.actions
export default drinkSlice.reducer
