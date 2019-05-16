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
      <Sum g = {good} b = {bad} n = {neutral}/>
      <Average g = {good} b = {bad} n = {neutral}/>
      <Positive g = {good} b = {bad} n = {neutral}/>
    </div>
  )
}

const Positive = (props)=>{
  const {g, n, b} = props
  let sum = g+n+b
  let pos = g/sum*100
  return(
    <p>positiivisia {pos} %</p>
  )
}

const Average = (props)=>{
  const {g, n, b} = props
  //let or const--?
  let summa = g+n+b
  let luku = g-b
  let ka = luku/summa

  return(
    <p>keskiarvo {ka}</p>
  )
}

const Sum = (props) =>(
  <p>yhteensä {props.g + props.n + props.b}</p>
)

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