import { useState } from 'react'
import {Fragment} from 'react'

//http://localhost:3007/

const Statistics = (props) => {
  if ((props.good >= 1) || (props.bad >= 1)  || (props.neutral >= 1)) {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.sum} />
          <StatisticLine text="average" value={(props.good-props.bad)/props.sum} />
          <StatisticLine text="positive" value={props.good/props.sum*100} />
        </tbody>
      </table>
    </div>
  )
} else {
  return (
    <div>
      <p> no feedback given</p>
    </div>
)}}

const StatisticLine = (props) =>  {
  return (
   <tr>
      <td>{props.text}</td><td> {props.value}</td>
   </tr>
  )}

const Button = (props) => {
  return (
    <>
      <button onClick = {props.handleClick}>{props.text} </button>
    </> //to avoid rendering extra div
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {()=> setGood(good+1)} text="good" />
      <Button handleClick = {()=> setNeutral(neutral+1)} text="neutral" />
      <Button handleClick = {()=> setBad(bad+1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}/>

    </div>
  )
}

export default App