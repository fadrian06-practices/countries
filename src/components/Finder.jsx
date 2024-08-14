export default function Finder({ find = (country = '') => console.log(country) }) {
  /** @type {import('react').FormEventHandler} */
  function handleSubmit(event) {
    event.preventDefault()

    const { target } = event

    if (target instanceof HTMLFormElement) {
      find(target.country.value)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Find country: &nbsp;
        <input type='search' name='country' required />
      </label>
    </form>
  )
}
