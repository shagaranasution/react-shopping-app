import { connect } from 'react-redux'

import CartPage from './CartPage'

const mapStateToProps = (state) => {
  return {
    carts: state.addCarts.carts,
  }
}

export default connect(mapStateToProps)(CartPage)