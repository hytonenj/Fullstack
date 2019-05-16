import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>anna palautetta</h3>
      <Button handleClick={()=> setGood(good+1)} text = 'hyvä'/>
      <Button handleClick={()=> setNeutral(neutral+1)} text = 'neutraali'/>
      <Button handleClick={()=> setBad(bad+1)} text = 'huono'/>
      <br></br>
      <h3>statistiikka</h3>
      <Statistics g = {good} b = {bad} n = {neutral}/>
      
    </div>
  )
}

const Statistics = (props)=>{
  const{g,n,b} = props
  const sum = g+n+b
  const ka = (g-b)/sum
  const pos = g/sum*100 + ' %'

  if(sum===0){
    return(
      <p>Ei yhtään palautetta annettu</p>
    )
  }

  return(
    <table>
      <Statistic text = 'hyvä' value = {g}/>
      <Statistic text = 'neutraali' value = {n}/>
      <Statistic text = 'huono' value = {b}/>
      <Statistic text = 'yhteensä' value = {sum}/>
      <Statistic text = 'keskiarvo' value = {ka}/>
      <Statistic text = 'positiivisia' value = {pos}/>
    </table>
  )
}

const Statistic = (props) => {
  return (
    <tr>
    <td>{props.text} {props.value}</td>
    </tr>
  )
}

const Button = (props) =>{
  return(
    <button onClick = {props.handleClick}>
    {props.text}</button>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)