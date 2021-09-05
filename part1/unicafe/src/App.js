import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.text === "average" && isNaN(props.value) === true){
    return (
      null
    )
  } else if (props.text === "positive" && isNaN(props.value) === true) {
    return (
      null
    )
  } else {
    return (
      <div>
        <p>{props.text} {props.value}</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleBadClick = () => setBad(bad + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button> 
        <button onClick={handleBadClick}>bad</button> 
      </div>

      <div>
        <h1>statistics</h1>
        <Statistics text="good" value={good} />
        <Statistics text="neutral" value={neutral} />
        <Statistics text="bad" value={bad} />
        <Statistics text="all" value={good + bad + neutral} />
        <Statistics text="average" value={good-bad/(good + bad + neutral)} />
        <Statistics text="positive" value={good/(good + bad + neutral)}/>
      </div>
    </div>
  )
}

export default App