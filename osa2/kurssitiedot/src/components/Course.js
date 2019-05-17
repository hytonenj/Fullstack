import React from 'react'
//course ja kaikki alikomponentit

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

export default Course