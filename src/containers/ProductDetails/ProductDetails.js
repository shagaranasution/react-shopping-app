import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'

import './product-details.css'
import lovedOnLogo from '../../icon-loved-on.png'
import lovedOffLogo from '../../icon-loved-off.png'


const ProductDetails = (props) => {
  const { products, navRef } = props

  const { id: productId } = useParams()
  const product = products.filter(product => product.id === productId)[0] || {}
  const lovedLogoSource = product.loved === 0 ? lovedOffLogo : lovedOnLogo


  useEffect(() => {
    navRef.current.hide()
  }, [navRef])
  
  const handleClick = () => {
   console.log("buy") 
  }

  return (
    <div className="ProductDetails">
      <Header title="Product"/>
      <div className="ProductDetails__products">
        {Object.keys(product).length > 0 && 
          <>
            <div className="ProductDetails__image">
              <img src={product.imageUrl} alt="" />
            </div>
            <h1 className="ProductDetails__name">
              {product.title}
            </h1>
            <div className="ProductDetails__price">
              {product.price}
            </div>
            <div className="ProductDetails__loved">
              <img src={lovedLogoSource} alt="" />
            </div>
            <div className="ProductDetails__description">
              {product.description}
            </div>
            <div className="ProductDetails__buy">
              <p className="ProductDetails__buy_price">{product.price}</p>
              <button className="ProductDetails__buy_price_button" onClick={handleClick}>
                Buy
              </button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default ProductDetails