import { apiCall } from './api/api'
import {
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED
 } from './constants'

export const requestProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_PENDING })
  apiCall('https://private-4639ce-ecommerce56.apiary-mock.com/home')
    .then(data => dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: data[0].data }))
    .catch(error => dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: error }))
}