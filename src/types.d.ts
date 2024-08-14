export interface Country {
  name: {
    common: string
    official: string
  }
  capital: string[]
  languages: { [language: string]: string }
  area: number
  flags: {
    svg: string
    alt: string
  }
  capitalInfo: {
    latlng: [number, number]
  }
}

export interface Weather {
  weather: [{ id: number; main: string; description: string; icon: string }]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  wind: { speed: number; deg: number }
}

export type Countries = Country[]
