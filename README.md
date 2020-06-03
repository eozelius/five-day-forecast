## Buildit Technical test - 5 day forecast

This project is my submission for the Buildit Front End Engineering techncial test.  I built this project in React JS, with create-react-app

### Setup
- Build Solution
To build the solution, clone repository, cd into directory, and run `$ npm install` or `$ yarn install`

- Run Solution
To run this project from localhost, cd into directory and run `$ npm start` or `$ yarn start`

- Test Solution
To test this project, cd into directory and run `$ npm test`

### Project Structure
All code resides in the **src** dir

- Components
I created 3 components for this project, all can be found in **src** dir.
  - `ForecastContainer` - Connected Redux component that dispatches an action to fetch forecast data, and will pass that data down to `Forecast`
  - `Forecast` - Presentational component that receives Forecast data from ForecastContainer, parses that data into daily chucks and passes each day's data down to `DayForecast` via props.
  - `DayForecast` - Presentational Component that renders one day's forecast.
  - `HourForecast` - Presentational Component that renders a 3 hour forecast

- Styles
I created a Stylesheet for each component, that can be found in **src/styles**

- Images
Weather icon images (sunny, cloudy, rainy etc) are stored in **src/images**

- Util
I created a directory for functionality/calculations that didn't belong directly in a react component, but that I wanted to be able to share across components.  In this case I only have one function called `weathericon` that determines what image should be served, given the weather description

- Mock Data
I saved a JSON response from openweathermap.org and used this data for developing and testing to make sure I didn't accidentally exceed my api request limit.  As well as an easy reference to see the structure of my response.


### Design Decisions
  - Making Api requests to openweathermap.org - I abstracted all api requests to a single file so that none of my react components are dependent on the data source.  They only expect the data structure to have certain properties.

  - Redux - I implemented redux to be the single source of data for the application.  I also used Thunk in my redux actions to keep the actions pure.

