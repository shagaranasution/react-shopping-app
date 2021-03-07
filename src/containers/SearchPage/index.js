import { connect } from 'react-redux'

import SearchPage from './SearchPage'

const mapStateToProps = (state) => {
  return {
    products: state.requestProducts.products.productPromo || [],
    isPending: state.requestProducts.isPending,
  }
}

export default connect(mapStateToProps)(SearchPage)