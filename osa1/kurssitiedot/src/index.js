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
    <p>{props.p.name} {props.p.exercises}</p>
  </div>
  )
}

const Content = (props) => {
  return (
  <div>
    <Part p = {props.parts[0]}/>
    <Part p = {props.parts[1]}/>
    <Part p = {props.parts[2]}/>
  </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Yhteensä {props.parts[0].exercises+props.parts[1].exercises+
      props.parts[2].exercises} tehtävää</p>
  </div>
  )
}

//1.5
const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

//Earlier steps
//1.4
/*
const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]
  console.log(parts[0].name)
  return (
    <div>
      <Header course={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
      
    </div>
  )
}

//1.3
const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content p1 = {part1.name} ex1 = {part1.exercises}
      p2 = {part2.name} ex2 = {part2.exercises}
      p3 = {part3.name} ex3 = {part3.exercises}
      />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
    </div>
  )
}

//1.2
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

*/