export async function getWeather(latitude = NaN, longitude = NaN) {
  if (isNaN(latitude) || isNaN(longitude)) {
    return
  }

  const endpoint = new URL('https://api.openweathermap.org/data/2.5/weather')

  endpoint.searchParams.append('lat', latitude.toString())
  endpoint.searchParams.append('lon', longitude.toString())
  endpoint.searchParams.append('appid', OPENWEATHERMAP_APIKEY)
  endpoint.searchParams.append('units', 'metric')

  const response = await fetch(endpoint)
  const weather = await response.json()

  return weather
}

export function getWeatherIconUrl(icon = '') {
  if (!icon) {
    return
  }

  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}
