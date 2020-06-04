import React, { Component } from 'react'
import HourForecast from './HourForecast'
import './styles/dayforecast.css'
import weatherIcon from './util/weatherIcon'

class DayForecast extends Component {
  getDate = () => {
    const d = new Date(this.props.hours[0].dt_txt)
    return `${d.getMonth() + 1}/${d.getDate()}`
  }

  getLow = () => {
    let currentLow = this.props.hours[0].main.temp_min

    this.props.hours.forEach(hour => {
      if(hour.main.temp_min < currentLow){
        currentLow = hour.main.temp_min
      }
    })

    console.log(currentLow)

    return currentLow.toFixed(0)
  }

  getHigh = () => {
    let currentHigh = this.props.hours[0].main.temp_max

    this.props.hours.forEach(hour => {
      if(hour.main.temp_max > currentHigh){
        currentHigh = hour.main.temp_max
      }
    })

    return currentHigh.toFixed(0)
  }

  getDescription = () => {
    return this.props.hours[4].weather[0].description
  }

  getRain = () => {
    const rain = this.props.hours.reduce((rainSum, hour) => {
      if(!hour.rain) { return rainSum }
      if(!hour.rain['3h']){ return rainSum }
      return rainSum + hour.rain['3h']
    }, 0)

    if(!rain){
      return 0
    } else {
      return rain.toFixed(2)
    }
  }

  render(){
    const date = this.getDate()
    const low = this.getLow()
    const high = this.getHigh()
    const description = this.getDescription()
    const rain = this.getRain()
    const hourlyListings = this.props.hours.map((hour, index) => <HourForecast hour={hour} key={index} />)

    return (
      <div className={`day-forecast ${this.props.active}`}>
        <h3>{date}</h3>

        <img src={weatherIcon(description)} alt={`${description}`} />
        <p>
          <span className='day-low'>{low}&deg;</span> / <span className='day-high'>{high}&#8457;</span>
        </p>

        <h4 className='day-description'>{description}</h4>

        <p className='rain'>rain: {rain}</p>

        <p onClick={() => this.props.revealHourly(this.props.day)} className='hourly-link'>+ hourly</p>

        <div className='hourly-listings'>
          {hourlyListings}
        </div>
      </div>
    )
  }
}

export default DayForecast