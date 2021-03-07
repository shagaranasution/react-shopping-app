import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import './wishlist-page.css'

const WishlistPage = (props) => {
  const { products } = props

  return (
    <div className="WishlistPage">
      <Header title="Wishlist" />
      {
        products.length > 0 &&
          <div className="WishlistPage__products_container">
            <div className="WishlistPage__products">
              {products.map((product) => {
                return (
                  <Link to={`/detail/${product.id}`} key={product.id}>
                    <ProductCard product={product} />
                  </Link>
                )
              })}
            </div>
          </div>
      }
    </div>
  )
}

export default WishlistPage