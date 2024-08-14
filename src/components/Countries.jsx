import Country from './Country'

/** @param {{
 *   countries: import('../types').Countries,
 *   selectCountry: (officialName: string) => void
 * }} props */
export default function Countries({ countries, selectCountry }) {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.name.official}>
          {country.name.common} &nbsp;
          <button onClick={() => selectCountry(country.name.official)}>Show</button>
        </li>
      ))}
    </ul>
  )
}
