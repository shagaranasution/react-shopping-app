import { connect } from 'react-redux'

import WishlistPage from './WishlistPage'

const mapStateToProps = (state) => {
  const products = state.products.productPromo || []
  const wishlistProducts = products.filter((product) => {
    return product.loved === 1
  })
  return {
    products: wishlistProducts || []
  }
}

export default connect(mapStateToProps)(WishlistPage)