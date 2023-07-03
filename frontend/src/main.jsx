import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './app/store'
import { fetchDrinks } from './features/drinks/drinkSlice'

store.dispatch(fetchDrinks())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter basename='coffeeTime'>
      <App />
    </BrowserRouter>
  </Provider>
)
