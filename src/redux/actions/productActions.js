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

//SORT PRODUCTS BY PRICE
export const sortProducts = (products, sort) => dispatch => {
  const newProduct = [...products]
  console.log(newProduct)
  if (sort !== '') {
    newProduct.sort((a, b) =>
      sort === 'lowestprice'
        ? a.price > b.price
          ? 1
          : -1
        : a.price < b.price
        ? 1
        : -1
    )
  } else {
    newProduct.sort((a, b) => (a.id > b.id ? 1 : -1))
  }
  return dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: newProduct
    }
  })
}
