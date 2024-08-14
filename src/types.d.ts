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
}

export type Countries = Country[]
