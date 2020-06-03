import Api from './Api.js'

export const getForecast = () => {
  return dispatch => {
    dispatch({ type: "FETCH_FORECAST_STARTED" });
    Api.fetchForecast()
      .then(response => {
        dispatch({
          type: 'FETCH_FORECAST_SUCCESS',
          payload: response
        })
      })
      .catch(error => {
        console.log('error: ' + error)
        dispatch({
          type: 'FETCH_FORECAST_FAIL'
        })
      });
  };
  // return function(dispatch) {
  //   return Api.fetchForecast()
  //     .then((response) => {
  //       dispatch({
  //         type: 'GET_FORECAST',
  //         payload: response
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('error: ' + error)
  //     })
  // }
}