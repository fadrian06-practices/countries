import { useEffect, useState } from 'react'
import { getWeather, getWeatherIconUrl } from '../services/weather'

/** @type {import('../types').Weather | null} */
const weatherType = null

/** @param {{country: import('../types').Country}} props */
export default function Country({ country }) {
  const [weather, setWeather] = useState(weatherType)

  useEffect(() => {
    getWeather(...country.capitalInfo.latlng).then(setWeather)
  }, [])

  return (
    <article>
      <h2>{country.name.common}</h2>
      <dl>
        <dt>Capital:</dt>
        <dd>{country.capital[0]}</dd>
        <dt>Area:</dt>
        <dd>
          {country.area} km<sup>2</sup>
        </dd>
      </dl>
      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map(([languageCode, languageName]) => (
          <li key={languageCode}>{languageName}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} width='25%' />
      {weather && (
        <>
          <h3>Weather in {country.capital[0]}</h3>
          <dl>
            <dt>Temperature:</dt>
            <dd>{weather.main.temp} Celcius</dd>
          </dl>
          <img
            src={getWeatherIconUrl(weather.weather[0].icon)}
            alt={weather.weather[0].description}
            width='10%'
          />
          <dl>
            <dt>Wind:</dt>
            <dd>{weather.wind.speed} m/s</dd>
          </dl>
        </>
      )}
    </article>
  )
}
