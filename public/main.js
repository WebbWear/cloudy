const main = () => {
  document.querySelector('h1').textContent += '?'
}

const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/'

const searchAPI = () => {
  const userInput = document.querySelector('.input').value

  const key = 'd2816c5d1df2915df983bc9434b35661'
  const WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/'

  const _url = `${WEATHER_BASE_URL}weather?appid=${key}&q=${userInput}`


  fetch(_url)
    .then(resp => {
      console.log("response = ", resp)
      if (resp.status === 200) {
        return resp.json()
      } else {
        consol.log("error", resp)
      }}
    ).then(searchResults => {
      console.log("search results = ", searchResults)
      const parent = document.querySelector()
    })

  console.log(userInput)
}


document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', searchAPI)

