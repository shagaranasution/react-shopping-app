import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import SearchInput from '../../components/SearchInput'

import './home.css'
import lovedLogo from '../../icon-loved.png'

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
                  <div className="Home__product" key={product.id}>
                    <div className="Home__product-image">
                      <img src={product.imageUrl} alt="" />
                    </div>
                    <div className="Home__product-title">
                      <p>{product.title}</p>
                    </div>
                    <div className="Home__product-price">{product.price}</div>
                    <div className="Home__product-icon">
                      <img src={lovedLogo} alt="" />
                      <span className="Home__product-loved">{product.loved}</span>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Home