import { connect } from 'react-redux'

import ProductDetails from './ProductDetails'

const mapStateToProps = (state) => {

  return {
    products: state.products.productPromo || []
  }
}

export default connect(mapStateToProps)(ProductDetails)