import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE } from '../actions/types'

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

    default:
      return state
  }
}
