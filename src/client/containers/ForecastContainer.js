import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getForecast } from '../actions'
import Forecast from '../Forecast'

class ForecastContainer extends Component {
  componentDidMount(){
    this.props.getForecast()
  }

  render(){ 
    return <Forecast forecast={this.props.forecast} /> 
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
})

const mapDispatchToProps = dispatch => ({
 getForecast: () => dispatch(getForecast())
})

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer)