import axios from 'axios'
// import mock_data from './mock_data/mock_5day'

export default class Api {
  static fetchForecast(cityId = 5128638){
    const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=<enter api key here>&units=imperial`
    return axios(url)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        console.log('error ' + error)
      })

    // Use this to return Mock data for testing
    // return new Promise((resolve) => resolve(JSON.parse(mock_data))) 
  }
}