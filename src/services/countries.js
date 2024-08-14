export async function getAllCountries() {
  const response = await fetch('https://studies.cs.helsinki.fi/restcountries/api/all')

  return await response.json()
}
