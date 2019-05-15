import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>{props.p1} {props.ex1}</p>
    <p>{props.p2} {props.ex2}</p>
    <p>{props.p3} {props.ex3}</p>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part p1={props.p1} ex1 = {props.ex1}/>
    <Part p2={props.p2} ex2 = {props.ex2}/>
    <Part p3={props.p3} ex3 = {props.ex3}/>  
  </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Yhteensä {props.ex1+props.ex2+props.ex3} tehtävää</p>
  </div>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content ex1={exercises1} ex2 = {exercises2} ex3={exercises3} 
      p1 = {part1} p2 = {part2} p3={part3}/>
      <Total ex1={exercises1} ex2 = {exercises2} ex3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))