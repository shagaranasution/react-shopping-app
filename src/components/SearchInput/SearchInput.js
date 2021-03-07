import { useRef, forwardRef, useImperativeHandle } from 'react'
import { useHistory } from 'react-router-dom'

import './search-input.css'
import searchLogo from '../../icon-search.png'

const SearchInput = (props, ref) => {
  const { value, onChange, onClick, withLeftButton } = props
  const inputRef = useRef() 
  const history = useHistory()

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus()
      }
    }
  })

  return (
    <div className="SearchInput">
        <div className="SearchInput__search">
          {withLeftButton && <button className="SearchInput__button_left" onClick={() => history.goBack()}>
            <p className="SearchInput__button_left_arrow">{`<`}</p>
          </button>}
          <input
            type="text" 
            className="SearchInput__search_term" 
            placeholder="Type item you are searching here?" 
            ref={inputRef}
            value={value} 
            onChange={onChange}/>
          <button type="submit" className="SearchInput__button_right" onClick={onClick}>
            <img src={searchLogo} alt="" className="SearchInput__button_search-image"/>
          </button>
        </div>
    </div>
  )
}

export default forwardRef(SearchInput)