import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  const list = props.parts
  const arr = list.map(e => e.exercises)
  const sum = arr.reduce((total, amount) => total + amount)
  return (
    <div>
      <p>yhteensä {sum} tehtävää</p>
    </div>
  )
}

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => {
  const list = props.parts
  const rows = () =>
    list.map(e => <Part key={e.id} part={e} />)

  return (
    <div>
      {rows()}
    </div>
  )
}
const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {

  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const list = courses.map(e =>
    <Course key = {e.id} course = {e}/>
  )
//console.log(list);
// I assume this is correct way to do this until told otherwise
  return (
    <div>
      {list}
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)