import React, { Component } from 'react'
import './styles/hourforecast.css'

class HourForecast extends Component {
  getTemp = () => {
    return this.props.hour.main.temp
  }

  getTime = () => {
    const d = new Date(this.props.hour.dt_txt)
    let h = d.getHours()

    // Midnight
    if(h === 0){ return `${12}AM` }

    // Noon
    if(h === 12){ return `${12}PM` }

    // Morning & Afternoon
    return h < 12 ? `${h}AM` : `${h - 12}PM`
  }


  render(){
    // console.log('HourForecast props')
    // console.log(this.props)

    const time = this.getTime()
    const temp = this.getTemp()

    return (
      <div className='hour-forecast'>
        <p className='time'>{time} - {temp}&#8457;</p>
      </div>
    )
  }
}

export default HourForecast