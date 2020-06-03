import clearSkySvg from '../images/clearSky.svg'
import lightRainSvg from '../images/lightRain.svg'
import moderateRainSvg from '../images/moderateRain.svg'
import cloudySvg from '../images/cloudy.svg'
import mostlySunnySvg from '../images/mostlysunny.svg'

function weatherIcon(description){
  switch(description) {
    case 'clear sky':
      return clearSkySvg
    case 'light rain':
      return lightRainSvg
    case 'moderate rain':
      return moderateRainSvg
    case 'overcast clouds':
      return cloudySvg
    case 'scattered clouds':
      return mostlySunnySvg
    case 'broken clouds':
      return mostlySunnySvg
    case 'few clouds':
      return mostlySunnySvg
    default:
      return ''
    }
}

export default weatherIcon