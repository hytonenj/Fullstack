import React from 'react'
import ReactDOM from 'react-dom'

const Header = props =>
  <h1>{props.course}</h1>

const Total = props => {
  var total = 0
  props.parts.forEach(element => {
    total += element.exercises
  });
  return <p>yhteensä {total} tehtävää</p>
}


const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = props => {
  const list = props.parts

  const rows = () =>
    list.map(e => <Part part={e}/>)

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
      <Total parts={props.course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
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
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)