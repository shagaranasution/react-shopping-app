import {
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,

  ADD_CARTS,
 } from './constants';

const initialStateProducts = {
  products: {},
  isPending: true
}

export const requestProducts = (state=initialStateProducts, action={}) => {
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

const initialStateCarts = {
  carts: []
}

export const addCarts = (state=initialStateCarts, action={}) => {
  switch (action.type) {
    case ADD_CARTS:
      
      // const newArr = [...state.carts, ...action.payload]
      // console.log('newArr',newArr)
      return {
        carts: [...state.carts, ...action.payload]
      }
    default:
      return state
  }
}