import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data)
    })
  }, [])


  const rows = () => {
    const list = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map(country => <Country key={country.name} name={country.name} capital={country.capital}
        population={country.population} languages={country.languages} flag={country.flag} />)

    return (
      list.length > 10 ? <p>Too many matches, specify another filter</p> : list
    )
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)

  }

  return (
    <div>
      find countries: <input onChange={handleFilter} />
      <br></br>
      {rows()}
    </div>
  )

}

const Country = ({ name, capital, population, languages, flag}) => {
  //console.log({ flag })
  const [open, setOpen] = useState(false)

  return (
    <div>
      {
          open ? <div><OpenCountry capital={capital} population={population} languages={languages}
          flag={flag} name={name} /> <button onClick={() => setOpen(false)}>close</button> </div> :
          <div>{name} <button onClick={() => setOpen(true)}> open </button></div>
      }
    </div>
  )
}

const OpenCountry = ({ name, capital, population, languages, flag }) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <ul>
        {languages.map(l => <li>{l.name}</li>)}
      </ul>
      <img src={flag} width="160" height="120"></img>
    </div>
  )
}

export default App