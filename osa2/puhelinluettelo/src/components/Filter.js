import React from 'react'


const Filter = (props) => {

    return (
        <div>
            rajaa näytettäviä: <input onChange={props.handleFilter} />
        </div>
    )
}


export default Filter