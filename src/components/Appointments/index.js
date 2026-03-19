// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: [], searchInput: ''}

  toggleStarLike = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isLike: !eachAppointment.isLike}
        } else {
          return eachAppointment
        }
      }),
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = () => {
    const {title, date, appointmentList} = this.state

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isLike: true,
    }

    this.setState({
      appointmentList: [...appointmentList, newAppointment],
      title: '',
      date: '',
    })
  }

  render() {
    const {title, date, appointmentList, searchInput} = this.state
    const filterdProjects = appointmentList.filter(eachAppointment =>
      eachAppointment.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="appointment-container">
        <div className="card-container">
          <div className="rows-container">
            <div className="card1">
              <h1 className="heading">Add Appointment</h1>
              <label>TITLE</label>
              <br />
              <input
                type="search"
                placeholder="Title"
                className="input"
                value={title}
                onChange={this.onChangeTitle}
              />
              <br />
              <label>DATE</label>
              <br />
              <input
                type="date"
                placeholder="Title"
                className="input"
                value={date}
                onChange={this.onChangeDate}
              />
              <div className="button-container">
                <button className="add-button" onClick={this.addAppointment}>
                  Add
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointment-image"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottom-container">
            <h2 className="heading">Appointments</h2>
            <button>Starred</button>
          </div>
          <input
            type="search"
            placeholder="Search Appointment"
            className="input-filter"
            onChange={this.onChangeSearchInput}
          />
          <ul className="appointment-list">
            {filterdProjects.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                toggleStarLike={this.toggleStarLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
