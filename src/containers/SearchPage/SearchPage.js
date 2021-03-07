import { useState } from 'react'
import ProductCard from '../../components/ProductCard'

import SearchInput from '../../components/SearchInput'

import './search-page.css'

const SearchPage = (props) => {
  const {products} = props
  const [searchedProducts, setSearchedProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleClick = () => {
    console.log("Search clicked")
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value.toLowerCase())

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue)
    })

    setSearchedProducts(filteredProducts)
  }

  return (
    <div className="SearchPage">
      <SearchInput onChange={handleChange} onClick={handleClick} withLeftButton />
      {
        searchedProducts.length > 0 &&
            <div className="SearchPage__products_container">
              <div className="SearchPage__products">
                {searchedProducts.map((product) => {
                  return (
                    <ProductCard product={product} key={product.id} />
                  )
                })}
              </div>
            </div>
      }
    </div>
  )
}

export default SearchPage