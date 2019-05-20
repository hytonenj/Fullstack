import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  /* list persons function
  const rows = (list) => list.map(person =>
    <Person key={person.name} name = {person.name} number={person.number}/>
  )
*/
  //list persons with filter
  const rows = () => persons.filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase()))
  .map(person=><Person key={person.name} name = {person.name} number={person.number}/>)


  //adding person
  const addPerson = (event) =>{
    event.preventDefault()
    //console.log(persons.name);
    
    const personObject = {
      name : newName,
      number : newNumber
    }
    persons.some(e=>e.name===newName)?window.alert(`${newName} on jo luettelossa`):
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  //name change
  const handleNameChange = (event) =>{
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  //number change
  const handleNumberChange = (event) =>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) =>{
    setNewFilter(event.target.value)
    
  }


  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <div>
          rajaa näytettäviä: 
          <input onChange = {handleFilter}/>
      </div>
      <h3>lisää uusi</h3>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input value = {newName}
          onChange = {handleNameChange}/>
          <br></br>
          numero: <input value = {newNumber}
          onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>{rows()}</ul>
    </div>
  )

}

const Person = (props) =>{
  return(
    <li>{props.name} {props.number}</li>
    
  )
}

export default App