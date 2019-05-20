import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Jimi',
    number: '045-000000'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  // list persons function
  const rows = () => persons.map(person =>
    <Person key={person.name} name = {person.name} number={person.number}/>
  )

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

  return (
    <div>
      <h2>Puhelinluettelo</h2>
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