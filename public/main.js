const key = 'd2816c5d1df2915df983bc9434b35661'
const fahrenheit = '&units=imperial'
const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + key + '&q=' 
const main = () => {
  document.querySelector('h1').textContent += '?'
}

const buttonUpdateEvent = () => {
  // console.log('My Button is being clicked')
  const userInput = document.querySelector('.input').value
  // console.log(userInput)

  const _url = `${WEATHER_BASE_URL}${userInput}${fahrenheit}` 

  fetch(_url)
    .then(resp => {
      console.log('response = ', resp)
      if (resp.status === 200) {
        return resp.json()
      } else {
        console.log('error', resp)
      }
    }
    ).then(searchResults => {
      document.querySelector('.searchResults').textContent = userInput + ' your forecast right now is ' + searchResults.main.temp + '° F'

    })

}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.updateWeather').addEventListener('click', buttonUpdateEvent)

