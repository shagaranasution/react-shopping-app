import { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import SearchInput from '../../components/SearchInput'
import ProductCard from '../../components/ProductCard'

import './home.css'

const Home = (props) => {
  const { 
    products,
    isPending,
    onRequestProducts } = props

  const history = useHistory()

  useEffect(() => { 
    onRequestProducts()
  }, [onRequestProducts])

  return (
    <div className="Home">
      <div className="Home__search_input">
        <div className="Home__search_input_front" onClick={() => history.push("/search")} />
        <SearchInput />
      </div>
      <div className="Home__categories">
        {isPending ?
         [...Array(4).keys()].map((value) => {
           return (
            <div className="Home__category loading-state" key={value}>
              <img src="" alt="" />
              <div />
            </div>
           )
         }) :
          products.category.map((category) => {
            return (
              <div className="Home__category" key={category.name}>
                <img src={category.imageUrl} alt="" />
                <div>{category.name}</div>
              </div>
            )
          })
        }
      </div> 
      <div className="Home__products_container">
        <div className="Home__products">
        {isPending ? 
          [...Array(2).keys()].map((value) => {
            return (
              <div className="Home__product loading-state" key={value} />
            )
          }) :
              products.productPromo.map((product) => {
                return (
                  <Link to={`/detail/${product.id}`} key={product.id}>
                    <ProductCard product={product} />
                  </Link>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Home