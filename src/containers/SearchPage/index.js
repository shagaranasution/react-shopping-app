import { connect } from 'react-redux'

import SearchPage from './SearchPage'

const mapStateToProps = (state) => {
  return {
    products: state.products.productPromo || [],
    isPending: state.isPending,
  }
}

export default connect(mapStateToProps)(SearchPage)