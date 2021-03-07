import './product-card.css'

import lovedOnLogo from '../../icon-loved-on.png'
import lovedOffLogo from '../../icon-loved-off.png'

const ProductCard = (props) => {
  const {product} = props
  const lovedLogoSource = product.loved === 0 ? lovedOffLogo : lovedOnLogo

  return (
    <div className="ProductCard" key={product.id}>
      <div className="ProductCard__image">
        <img src={product.imageUrl} alt="" />
      </div>
      <div className="ProductCard__title">
        <h1>{product.title}</h1>
      </div>
      <div className="ProductCard__price">{product.price}</div>
      <div className="ProductCard__icon">
        <img src={lovedLogoSource} alt="" />
      </div>
    </div>
  )
}

export default ProductCard