export const drinkReducer = (state = [], action) => {
  if (action.tye === '@drink/created') {
    return state.concat(action.payload)
  }
  return state
}
