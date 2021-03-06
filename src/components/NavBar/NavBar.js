import { Link, useLocation } from 'react-router-dom'

import './navbar.css'

const menuList = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'Wishlist',
    link: '/wishlist',
  },
  {
    name: 'Cart',
    link: '/cart',
  },
  {
    name: 'Logout',
    link: '/logout',
  },
]

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="NavBar">
      <div className="NavBar__links">
        {
          menuList.map((menu) => {
            return (
              <div className={`NavBar__link NavBar__link-${location.pathname === menu.link ? 'active' : 'inactive'}`} key={menu.name}>
                <Link to={menu.link}>
                  {menu.name}
                </Link>
              </div>
            )
          })
        }
      </div>
    </nav>
  )
}

export default NavBar