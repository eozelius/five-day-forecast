import React from 'react'
import App from '../App'
import { shallow, mount, render } from 'enzyme'

it('shallow renders', () => {
  shallow(<App />)
})
