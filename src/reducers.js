import {
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED
 } from './constants';

const initialStateProducts = {
  products: [],
  isPending: true
}

export const requestProducts = (state=initialStateProducts, action={}) => {
  console.log(action.type)
  switch (action.type) {
    case REQUEST_PRODUCTS_PENDING:
      return {
        ...state,
          isPending: true
      }
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isPending: false
      }
    case REQUEST_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}