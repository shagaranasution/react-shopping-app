import { connect } from 'react-redux'

import Home from './Home'
import { requestProducts } from '../../actions'

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isPending: state.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestProducts: () => dispatch(requestProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)