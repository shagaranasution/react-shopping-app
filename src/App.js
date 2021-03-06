import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails'
import WishlistPage from './containers/WishlistPage'
import CartPage from './containers/CartPage'
import SearchPage from './containers/SearchPage'

import './app.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__contents">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/detail/:id">
              <ProductDetails />
            </Route>
            <Route path="/wishlist" >
              <WishlistPage />
            </Route>
            <Route path="/cart" >
              <CartPage />
            </Route>
            <Route path="/search" >
              <SearchPage />
            </Route>
          </Switch>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
