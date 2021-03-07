import { useHistory } from 'react-router-dom'

import './search-input.css'
import searchLogo from '../../icon-search.png'

const SearchInput = (props) => {
  const { value, onChange, onClick, withLeftButton } = props

  const history = useHistory()

  return (
    <div className="SearchInput">
        <div className="SearchInput__search">
          {withLeftButton && <button className="SearchInput__button_left" onClick={() => history.goBack()}>
            <p className="SearchInput__button_left_arrow">{`<`}</p>
          </button>}
          <input type="text" className="SearchInput__search_term" placeholder="Type item you are searching here?" value={value} onChange={onChange}/>
          <button type="submit" className="SearchInput__button_right" onClick={onClick}>
            <img src={searchLogo} alt="" className="SearchInput__button_search-image"/>
          </button>
        </div>
    </div>
  )
}

export default SearchInput