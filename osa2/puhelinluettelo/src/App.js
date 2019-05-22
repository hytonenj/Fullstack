import React, { useState, useEffect } from 'react'
import Submitform from './components/Submitform'
import Filter from './components/Filter'
import personService from './services/persons'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [newFilter, setNewFilter] = useState('')

    //list persons
    useEffect(() => {
        personService.getAll().then(response => {
                setPersons(response.data)
            })
    }, [])

    //delete person
    const removePerson = id => {
        const person = persons.find(n => n.id === id)
        if(window.confirm(`poistetaanko ${person.name}`)){
            personService.remove(id)
            .then(response =>{
                setPersons(persons.filter(p => p.id !== id))
            })
        }
      
    }

    //list persons with filter
    const rows = () => persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Person key={person.name} name={person.name} number={person.number} removePerson={removePerson} id = {person.id}/>)


    //add person
    const addPerson = (event) => {
        event.preventDefault()
        //console.log(persons.name);

        const personObject = {
            name: newName,
            number: newNumber
        }

        personService.create(personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })

    }

    //name change
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    //number change
    const handleNumberChange = (event) => {
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
            <Submitform addPerson={addPerson} newName={newName}
                handleNameChange={handleNameChange} newNumber={newNumber}
                handleNumberChange={handleNumberChange} />
            <h2>Numerot</h2>
            <ul>{rows()}</ul>
        </div>
    )

}

export default App