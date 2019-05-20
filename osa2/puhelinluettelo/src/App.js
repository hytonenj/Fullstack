import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  // list persons function
  const rows = () => persons.map(person =>
    <Person key={person.name} name = {person.name}/>
  )

  //adding person
  const addPerson = (event) =>{
    event.preventDefault()
    
    const personObject = {
      name : newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  //name change
  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input value = {newName}
          onChange = {handleNameChange}/>
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
    <li>{props.name}</li>
    
  )
}

export default App