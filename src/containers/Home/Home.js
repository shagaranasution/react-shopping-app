import { useEffect } from 'react'

import './home.css'

const Home = (props) => {
  const { 
    products,
    isPending,
    onRequestProducts } = props

  useEffect(() => {
    onRequestProducts()
  }, [onRequestProducts])

  return (
    <div className="Home">
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
          [1,2].map(() => {
            return (
              <div className="Home__product loading-state" />
            )
          }) :
              products.productPromo.map((product) => {
                return (
                  <div className="Home__product">
                    {product.name}
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