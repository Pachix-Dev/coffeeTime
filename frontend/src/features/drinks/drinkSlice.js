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

export const updateDrinks = createAsyncThunk('drinks/updateDrinks', async (data) => {
  const drinks = await drinkService.updateDrink(data)
    .then((response) => {
      return response
    })
  return drinks
})

export const addDrinks = createAsyncThunk('drinks/addDrinks', async (data) => {
  const drinks = await drinkService.createDrink(data)
    .then((response) => {
      return response
    })
  return drinks
})

export const removeDrinks = createAsyncThunk('drinks/removeDrinks', async (id) => {
  const drinks = await drinkService.deleteDrink(id)
    .then((response) => {
      return response
    })
  return drinks
})

export const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
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
      .addCase(addDrinks.fulfilled, (state, action) => {
        state.drinks.push(action.payload.data.mongodbResult)
      })
      .addCase(updateDrinks.fulfilled, (state, action) => {
        if (!action.payload?.data?.mongodbResult?.id) {
          console.log('Update could not complete')
          console.log(action.payload)
          return
        }
        const { id, title, description, ingredients, images } = action.payload?.data?.mongodbResult
        const foundDrink = state.drinks.find(drink => drink.id === id)
        if (foundDrink) {
          foundDrink.title = title
          foundDrink.description = description
          foundDrink.ingredients = ingredients
          foundDrink.images = images
        }
      })
      .addCase(removeDrinks.fulfilled, (state, action) => {
        const foundDrink = state.drinks.find((drink) => drink.id === action.payload?.data?.id)
        if (foundDrink) {
          state.drinks.splice(state.drinks.indexOf(foundDrink), 1)
        }
      })
  }
})

export const selectAllPosts = (state) => state.drinks.drinks
export const getPostsStatus = (state) => state.drinks.status
export const getPostsError = (state) => state.drinks.error

export const selectPostById = (state, postId) =>
  state.drinks.drinks.find(post => post.id === postId)

export const { initialDrinks } = drinkSlice.actions
export default drinkSlice.reducer
