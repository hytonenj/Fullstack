import React from 'react'


const Person = (props) => {
    
    return (
      <li>{props.name} {props.number} <button onClick={()=>props.removePerson(props.id)}>poista</button></li>
  
    )
  }

  export default Person