import { connect } from 'react-redux'

import { addCarts } from '../../actions'

import ProductDetails from './ProductDetails'

const mapStateToProps = (state) => {
  return {
    products: state.requestProducts.products.productPromo || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (product) => {
      dispatch(addCarts([product]))
    }, 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)