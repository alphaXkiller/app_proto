import React, { Component } from 'react'
import Router from './config/router.js'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import ThunkMiddleware from 'redux-thunk'

import Reducers from './reducers/index.js'

const store = createStore(Reducers, applyMiddleware(ThunkMiddleware))

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
