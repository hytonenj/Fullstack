import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array.apply(null, new Array(10)).map(Number.prototype.valueOf, 0))

  const handleVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    return (
      setVote(copy)
    )
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={() => setSelected(getRandomInt(props.anecdotes.length))} text='next anecdote' />
      <BestAnecdote vlist={vote} alist={props.anecdotes}/>
    </div>
  )

}

const BestAnecdote = (props) => {
  const votelist = props.vlist
  const anecdotelist = props.alist
  var mostVotes = 0

  var max = votelist[0];
  var maxIndex = 0;

  for (var i = 1; i < votelist.length; i++) {
    if (votelist[i] > max) {
      maxIndex = i;
      max = votelist[i];
    }
  }
  return(
    <div>
      <h3>Anecdote with most votes</h3>
      {anecdotelist[maxIndex]}
      <br></br>
      has {max} votes
    </div>
  )

}

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)