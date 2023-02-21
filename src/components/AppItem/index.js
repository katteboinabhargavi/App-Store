// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="item-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="para-1">{appName}</p>
    </li>
  )
}

export default AppItem
