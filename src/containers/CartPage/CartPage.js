import React, { useEffect } from 'react'

import Header from '../../components/Header'

import './cart-page.css'

const CartPage = (props) => {
  const { 
    navRef,
    carts,
    } = props

  useEffect(() => {
    navRef.current.show()
  }, [navRef])

  return (
    <div className="CartPage">
      <Header title="Cart" />
      { carts.length > 0 && 
        <div className="CartPage__items">
          {
            carts.map((item, index) => {
              return (
                <div className="CartPage__item" key={`${item.id}-${index}`}>
                  <div className="CartPage__item_image">
                    <img src={item.imageUrl} alt=""/>
                  </div>
                  <div className="CartPage__item_name">
                    {item.title}
                  </div>
                  <div className="CartPage__item_price">
                    {item.price}
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default CartPage