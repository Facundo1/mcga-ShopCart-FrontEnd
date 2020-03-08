import {
  FETCH_PRODUCTS,
  ORDER_PRODUCTS_BY_PRICE,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  UPDATE_PRODUCT_PENDING,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
  SET_SELECTED_PRODUCT_ID,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
} from './types'
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

//POST PRODUCTS
export const postProduct = product => {
  return dispatch => {
    dispatch({
      type: ADD_PRODUCT_PENDING
    })
    const { token } = store.getState()
    const options = {
      timeout: 25000,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `BEARER ${token}`
      },
      body: JSON.stringify(product)
    }
    console.log('options', options)
    return fetch(`http://localhost:5000/api/product`, options)
      .then(res => res.json())
      .then(data => {
        console.log('POST PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: ADD_PRODUCT_SUCCESS,
          payload: {
            product: data
          }
        })
      })
      .catch(error => {
        return dispatch({
          type: ADD_PRODUCT_ERROR,
          payload: error
        })
      })
  }
}

//UPDATE PRODUCTS
export const updateProduct = product => {
  console.log(product)
  return dispatch => {
    dispatch({
      type: UPDATE_PRODUCT_PENDING
    })

    const options = {
      timeout: 25000,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product })
    }

    return fetch(`http://localhost:5000/api/product/${product._id}`, options)
      .then(res => res.json())
      .then(data => {
        console.log('UPDATE PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: UPDATE_PRODUCT_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: UPDATE_PRODUCT_ERROR,
          payload: error
        })
      })
  }
}

//SET PRODUCT
export const setProductOnForm = _id => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_PRODUCT_ID,
      payload: _id
    })
  }
}

//DELETE THE PRODUCTS
export const deleteProduct = code => {
  return dispatch => {
    dispatch({
      type: DELETE_PRODUCT_PENDING
    })

    const options = {
      timeout: 25000,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`http://localhost:5000/api/product/${code}`, options)
      .then(res => res.json())
      .then(data => {
        console.log('DELETE PRODUCT', data)
        if (!Object.entries(data).length) {
          return Promise.reject(data)
        }

        return dispatch({
          type: DELETE_PRODUCT_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        return dispatch({
          type: DELETE_PRODUCT_ERROR,
          payload: error
        })
      })
  }
}
