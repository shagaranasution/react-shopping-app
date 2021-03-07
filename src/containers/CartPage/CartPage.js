import { useEffect } from 'react'

import Header from '../../components/Header'

import './cart-page.css'

const CartPage = (props) => {
  const { navRef } = props

  useEffect(() => {
    navRef.current.show()
  }, [navRef])

  return (
    <div className="CartPage">
      <Header title="Cart" />
      Cart page
    </div>
  )
}

export default CartPage