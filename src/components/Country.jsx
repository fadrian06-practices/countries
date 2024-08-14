/** @param {{country: import('../types').Country}} props */
export default function Country({ country }) {
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
    </article>
  )
}
