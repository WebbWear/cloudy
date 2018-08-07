# Cloudy


Requirements
Using openweathermap.org, create a simple UI that allows a user to search for the current weather by zip code or city

-temnp not in US format
        -add '&unit=imperial'
-add appID to url
    http://api.openweathermap.org/data/2.5/weather?q=33635&appid=d2816c5d1df2915df983bc9434b35661

    Base URL: const _url = `${BASE_URL}/tampa?search=${needle}`

    const weatherKey = () => {
       const key =  'd2816c5d1df2915df983bc9434b35661'
        const WEATHER_BASE_URL = http://api.openweathermap.org/data/2.5/
        const _zip = ' '
        const _url = `${WEATHER_BASE_URL}weather?appid=${key}&{_zip}`
      }