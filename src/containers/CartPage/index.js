import { connect } from 'react-redux'

import { addCarts } from '../../actions'

import CartPage from './CartPage'

const mapStateToProps = (state) => {
  return {
    carts: state.addCarts.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleBuy: (product) => dispatch(addCarts([product])),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)