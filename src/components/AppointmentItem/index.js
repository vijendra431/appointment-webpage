// Write your code here

import './index.css'
import format from 'date-fns/format'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarLike} = props
  const {id, title, date, isLike} = appointmentDetails

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const addImage = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const ontoggle = () => {
    toggleStarLike(id)
  }
  return (
    <li className="list-items">
      <div className="item-container">
        <div className="container2">
          <div className="search-star">
            <h1 className="name">{title}</h1>
            <button className="star-button" onClick={ontoggle}>
              <img src={addImage} alt={id} className="star-images" />
            </button>
          </div>
          <h2 className="date">Date: {formattedDate}</h2>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
