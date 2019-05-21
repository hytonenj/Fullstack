import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Submitform from './components/Submitform'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/persons').then(response => {
            setPersons(response.data)
        })
    },[])


    //list persons with filter
    const rows = () => persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Person key={person.name} name={person.name} number={person.number} />)


    //adding person
    const addPerson = (event) => {
        event.preventDefault()
        //console.log(persons.name);

        const personObject = {
            name: newName,
            number: newNumber
        }

        axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
        })
        
        /*
        persons.some(e => e.name === newName) ? window.alert(`${newName} on jo luettelossa`) :
            setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
        */
    }

    //name change
    const handleNameChange = (event) => {
        //console.log(event.target.value)
        setNewName(event.target.value)
    }

    //number change
    const handleNumberChange = (event) => {
        //console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) => {
        setNewFilter(event.target.value)

    }


    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Filter handleFilter={handleFilter} />
            <h3>lisää uusi</h3>
            <Submitform addPerson={addPerson} newName = {newName}
            handleNameChange = {handleNameChange} newNumber = {newNumber}
            handleNumberChange = {handleNumberChange} />
            <h2>Numerot</h2>
            <ul>{rows()}</ul>
        </div>
    )

}

export default App