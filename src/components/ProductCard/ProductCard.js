import './product-card.css'

import lovedLogo from '../../icon-loved.png'

const ProductCard = (props) => {
  const {product} = props

  return (
    <div className="ProductCard" key={product.id}>
      <div className="ProductCard__image">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="ProductCard__title">
        <p>{product.title}</p>
      </div>
      <div className="ProductCard__price">{product.price}</div>
      <div className="ProductCard__icon">
        <img src={lovedLogo} alt="" />
        <span className="ProductCard__loved">{product.loved}</span>
      </div>
    </div>
  )
}

export default ProductCard