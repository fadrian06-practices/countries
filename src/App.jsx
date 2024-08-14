import Finder from './components/Finder'
import Countries from './components/Countries'
import { useState, useEffect } from 'react'
import { getAllCountries } from './services/countries'

/** @type {import('./types').Countries} */
const countriesType = []

export default function App() {
  const [allCountries, setAllCountries] = useState(countriesType)
  const [filteredCountries, setFilteredCountries] = useState(countriesType)

  useEffect(() => {
    getAllCountries().then(setAllCountries)
  }, [])

  function find(countryFilter = '') {
    if (!countryFilter) {
      return
    }

    let limit = 10

    const foundCountries = allCountries.filter(savedCountry => {
      if (limit < 0) {
        return false
      }

      const match =
        savedCountry.name.common.toLowerCase().includes(countryFilter.toLowerCase()) ||
        savedCountry.name.official.toLowerCase().includes(countryFilter.toLowerCase())

      if (match) {
        limit--
      }

      return match
    })

    setFilteredCountries(foundCountries)
  }

  function selectCountry(officialName = '') {
    if (!officialName) {
      return
    }

    const foundCountry = filteredCountries.find(country => {
      return country.name.official === officialName
    })

    if (foundCountry) {
      setFilteredCountries([foundCountry])
    }
  }

  return (
    <>
      <Finder find={find} />
      <Countries countries={filteredCountries} selectCountry={selectCountry} />
    </>
  )
}
