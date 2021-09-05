import React, { useState } from 'react'

const Statistics = () => {
  
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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <Statistics text="average" value={good, bad, neutral} />
        <Statistics text="positive" value={good, bad, neutral}/>
        <p>average {good - bad/(good+bad+neutral)}</p>
        <p>positive {good/(good+bad+neutral)}</p>
      </div>
    </div>
  )
}

export default App