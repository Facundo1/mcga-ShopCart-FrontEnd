import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from './types'
import store from '../store'

//FETCH PRODUCTS
export const fetchProducts = () => dispatch => {
  fetch('http://localhost:5000/api/product')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_PRODUCTS, payload: data })
    })
}
