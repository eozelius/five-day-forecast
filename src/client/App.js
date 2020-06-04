import React, { Component } from 'react'
import './app.css'
import ForecastContainer from './containers/ForecastContainer'

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <header className="App-header" style={appHeaderStyle}>
          <h1 className="App-title" style={appTitleStyle}>Ethan Ozelius' 5 day forecast!</h1>
          <h3> - Now with more freezing rain!</h3>
        </header>
        <ForecastContainer />
      </div>
    );
  }
}

const appStyle = {
  textAlign: 'center'
}

const appHeaderStyle = {
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white'
}

const appTitleStyle = {
  fontSize: '1.5em',
  color: 'red'
}


export default App
