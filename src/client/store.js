import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {forecastReducer} from './reducer'

export default function configureStore(initialState = {}) {
 return createStore(
  forecastReducer,
  applyMiddleware(thunk)
 )
}