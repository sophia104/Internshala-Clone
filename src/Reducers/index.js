import { combineReducers } from '@reduxjs/toolkit'
import todos from './todos'
import counter from './counter'

export default combineReducers({
  todos,
  counter
})