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
    default:
      return state
  }
}
