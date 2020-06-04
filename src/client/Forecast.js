import React, { Component } from 'react'
import './styles/forecast.css'
import DayForecast from './DayForecast'
import './styles/forecast.css'

class Forecast extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeDay: 0,
    }
  }

  revealHourly = (day) => {
    if(day === this.state.activeDay){
      this.setState({ activeDay: null })
      return
    }

    this.setState({
      activeDay: day
    })
  }

  render() {
    const days = []
    const location = this.props.forecast && this.props.forecast.city ? this.props.forecast.city.name : ''

    if(this.props.forecast && this.props.forecast.list){
      const myForecast = this.props.forecast.list.slice(0)

      while(myForecast.length > 0){
        days.push(myForecast.splice(0,8))
      }
    }

    const renderedDays = days.map((day, index) => 
      <DayForecast
        hours={day}
        day={index}
        revealHourly={this.revealHourly} 
        active={this.state.activeDay === index ? 'active' : ''}
        key={index} />
    )

    return (
      <div className='forecast-container'>
        <h2>{location}</h2>
        <div className="forecast">
          { renderedDays }
        </div>
      </div>
    )
  }
}

export default Forecast