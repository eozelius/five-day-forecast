import React from 'react'
import ReactDOM from 'react-dom'
import ForecastContainer from '../containers/ForecastContainer'
import Forecast from '../Forecast'
import { shallow, mount, render } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import {Reducer} from 'redux-testkit'
import thunk from 'redux-thunk'
import Api from '../Api'
// import * as Actions from '../actions'
import {forecastReducer} from '../reducer'

describe('ForecastContainer Connected Component', () => {
  let store
  let promise

  beforeEach(() => {
    const mockStore = configureMockStore([thunk])
    store = mockStore({forecast: {'weather': 'initial weather'}})
    promise = new Promise((resolve, reject) => {resolve({'weather': 'new weather'})});
    spyOn(Api, 'fetchForecast').and.returnValue(promise)
  })

  it('renders without crashing', () => {
    shallow(<ForecastContainer store={store} />)
  })

  it('renders a presentational <Forecast> passing forecast as props', () => {
    const wrapper = mount(<ForecastContainer store={store} />)
    expect(wrapper.find(Forecast).prop('forecast')).toEqual({'weather': 'initial weather'})
  })

  it('dispatches a FETCH_FORECAST_STARTED & FETCH_FORECAST_SUCCESS after mounting', async() => {
    const wrapper = mount(<ForecastContainer store={store} />)
    expect(store.getActions()[0]).toEqual({ type: 'FETCH_FORECAST_STARTED' })
    await promise
    expect(store.getActions()[1]).toEqual({ type: 'FETCH_FORECAST_SUCCESS', payload: {'weather': 'new weather'} })
  })

  it('updates forecast in state with payload on FETCH_FORECAST_SUCCESS', () => {
    Reducer(forecastReducer).expect({ type: 'FETCH_FORECAST_SUCCESS', payload: {'weather': 'new weather'} })
      .toReturnState({'forecast': {'weather': 'new weather'}})
  })
})





