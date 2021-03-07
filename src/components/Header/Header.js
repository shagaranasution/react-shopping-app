import { useHistory } from 'react-router-dom'

import './header.css'

const Header = (props) => {
  const {title} = props
  const history = useHistory()

  return (
    <div className="Header">
      <button 
        className="Header__buttonback" 
        onClick={() => history.goBack()}>
        {'<'}
      </button>
      <div className="Header__title">
        {title}
      </div>
    </div>
  )
}

export default Header