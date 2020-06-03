import React from 'react'
import Forecast from '../Forecast'
import HourForecast from '../HourForecast'
import { shallow, mount, render } from 'enzyme'

describe('Forecast Presentational Component', () => {
  const mock_forecast = {
    forecast: {
      city: {
        name: 'mock city name'
      },
      list: [{
        "dt_txt":"2018-09-11 00:00:00",
        "dt":1536624000,
        "main":{
          "temp":57.78,
          "temp_min":57.18,
          "temp_max":57.78,
          "pressure":1002.26,
          "sea_level":1033.39,
          "grnd_level":1002.26,
          "humidity":95,
          "temp_kf":0.33
        },
        "weather":[
          {
            "id":501,
            "main":"Rain",
            "description":"moderate rain",
            "icon":"10n"
          }
        ],
      }]
    }
  }

  it('shallow renders', () => {
    shallow(<Forecast />)
  })

  it('receives forecast data via props', () => {
    const wrapper = mount(<Forecast forecast={mock_forecast} />)
    expect(wrapper.prop('forecast')).toEqual(mock_forecast)
  })

  it('renders the city name', () => {
    const wrapper = mount(<Forecast forecast={mock_forecast} />)
    expect(wrapper.find('h2').length).toEqual(1)
  })
})