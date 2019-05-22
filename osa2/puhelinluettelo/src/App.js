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
    const [errorMessage, setErrorMessage] = useState(null)

    //list persons
    useEffect(() => {
        personService.getAll().then(response => {
            setPersons(response.data)
        })
    }, [])

    //delete person
    const removePerson = id => {
        const person = persons.find(n => n.id === id)
        if (window.confirm(`poistetaanko ${person.name}`)) {
            personService.remove(id)
                .then(response => {
                    setPersons(persons.filter(p => p.id !== id))
                })
            setErrorMessage(`Poistettiin ${person.name}`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)
        }

    }

    //list persons with filter
    const rows = () => persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
        .map(person => <Person key={person.name} name={person.name} number={person.number} removePerson={removePerson} id={person.id} />)


    //add person
    const addPerson = (event) => {
        event.preventDefault()
        //console.log(persons.name);

        const personObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(e => e.name === newName)) {
            window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)
            const person = persons.find(n => n.name === newName) //find person with the name
            const changedPerson = { ...person, number: newNumber } //copy person object and change his number

            personService.update(person.id, changedPerson)
                .then(response => {
                    setPersons(persons.map(p => p.id !== person.id ? p : response.data))
                })
            setErrorMessage(`Muunnettiin henkilön ${newName}  numero`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)

        } else {
            personService.create(personObject)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setNewName('')
                    setNewNumber('')
                })
            setErrorMessage(`Lisättiin ${newName}`)
            setTimeout(() => {
                setErrorMessage(null)
            }, 3000)

        }
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
            <Notification message={errorMessage} />
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

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default App