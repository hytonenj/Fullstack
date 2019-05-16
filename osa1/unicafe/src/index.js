import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <Button handleClick={()=> setGood(good+1)} text = 'hyvä'/>
      <Button handleClick={()=> setNeutral(neutral+1)} text = 'neutraali'/>
      <Button handleClick={()=> setBad(bad+1)} text = 'huono'/>
      <br></br>
      <Statistics/>
      <List text='hyvä' com={good}/>
      <List text='neutraali' com={neutral}/>
      <List text='huono' com={bad}/>
    </div>
  )
}

const List = (props) =>{
  return(
    <p>{props.text} {props.com}</p>
  )
}

const Button = (props) =>{
  return(
    <button onClick = {props.handleClick}>
    {props.text}</button>
  )
}

const Header = () =>{
  return(
    <h3>anna palautetta</h3>
  )
}

const Statistics = () =>(
  <h3>statistiikka</h3>
)

ReactDOM.render(<App />, 
  document.getElementById('root')
)