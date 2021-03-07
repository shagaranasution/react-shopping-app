import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './navbar.css'

const menuList = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'wishlist',
    link: '/wishlist',
  },
  {
    name: 'cart',
    link: '/cart',
  },
  {
    name: 'logout',
    link: '/logout',
  },
]

const NavBar = (props, ref) => {
  const navRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      hide: () => {
        navRef.current.hidden = true
      },
      show: () => {
        navRef.current.hidden = false
      }
    }
  })

  const location = useLocation();
  
  return (
    <nav className="NavBar" ref={navRef}>
      <div className="NavBar__links">
        {
          menuList.map((menu) => {
            return (
              <div className={`NavBar__link NavBar__link-${(location.pathname === menu.link) || (menu.name === "home" && location.pathname === "/search") ? 'active' : 'inactive'}`} key={menu.name}>
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

export default forwardRef(NavBar)