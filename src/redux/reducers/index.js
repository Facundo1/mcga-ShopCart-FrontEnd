import { combineReducers } from 'redux'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  products: productReducer,
  cart: cartReducer,
  users: loginReducer
})
