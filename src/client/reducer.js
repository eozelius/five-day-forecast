export const forecastReducer = (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_FORECAST_SUCCESS':
    return {
      forecast: action.payload
    }
  default:
    return state
  }
}
