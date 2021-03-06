import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import ProductDetails from './containers/ProductDetails'
import WishlistPage from './containers/WishlistPage'
import CartPage from './containers/CartPage'
import SearchPage from './containers/SearchPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <div className="container">
              <Home />
            </div>
          </Route>
          <Route path="/detail/:id">
            <div className="container">
              <ProductDetails />
            </div>
          </Route>
          <Route path="/wishlist" >
            <div className="container">
              <WishlistPage />
            </div>
          </Route>
          <Route path="/cart" >
            <div className="container">
              <CartPage />
            </div>
          </Route>
          <Route path="/search" >
            <div className="container">
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
