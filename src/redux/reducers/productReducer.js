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
} from '../actions/types'

const initialState = {
  items: [],
  filteredItems: [],
  error: null,
  isLoading: false,
  message: undefined
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload,
        adminActions: false
      }
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        items: action.payload.items
      }
    case ADD_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true
      }
    case ADD_PRODUCT_SUCCESS: {
      const newProduct = action.payload.product.data
      const products = [...state.items, newProduct]
      return {
        ...state,
        isLoading: false,
        items: products
      }
    }
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        message: action.payload.message
      }

    case UPDATE_PRODUCT_PENDING:
      return {
        ...state,
        isLoading: true
      }

    case UPDATE_PRODUCT_SUCCESS: {
      console.log(action.payload)
      const newProductUpdate = [...state.items]
      const productToUpdate = newProductUpdate.findIndex(
        ele => ele._id === action.payload._id
      )

      newProductUpdate.splice(productToUpdate, 1, action.payload.product.data)
      return {
        ...state,
        isLoading: false,
        items: newProductUpdate
      }
    }

    case UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message
      }

    case SET_SELECTED_PRODUCT_ID: {
      return {
        ...state,
        productSelected: action.payload
      }
    }

    default:
      return state
  }
}
