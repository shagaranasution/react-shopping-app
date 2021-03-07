import { useRef } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails'
import WishlistPage from './containers/WishlistPage'
import CartPage from './containers/CartPage'
import SearchPage from './containers/SearchPage'

import './app.css'

function App() {
  const navRef = useRef()

  return (
    <Router>
      <div className="App">
        <div className="App__contents">
          <Switch>
            <Route path="/" exact>
              <Home navRef={navRef} />
            </Route>
            <Route path="/detail/:id">
              <ProductDetails navRef={navRef}/>
            </Route>
            <Route path="/wishlist" >
              <WishlistPage />
            </Route>
            <Route path="/cart" >
              <CartPage />
            </Route>
            <Route path="/search" >
              <SearchPage navRef={navRef} />
            </Route>
          </Switch>
        </div>
        <NavBar ref={navRef}/>
      </div>
    </Router>
  );
}

export default App;
