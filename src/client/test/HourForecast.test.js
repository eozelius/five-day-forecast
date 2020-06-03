import React from 'react'
import HourForecast from '../App'
import { shallow, mount, render } from 'enzyme'

it('shallow renders', () => {
  shallow(<HourForecast />)
})