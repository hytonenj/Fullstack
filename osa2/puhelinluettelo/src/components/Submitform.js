import React from 'react'

const Submitform = (props) => {
    const{addPerson, newName, handleNameChange, newNumber, handleNumberChange} = props
    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    nimi: <input value={newName}
                        onChange={handleNameChange} />
                    <br></br>
                    numero: <input value={newNumber}
                        onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
        </div>
    )
}

export default Submitform