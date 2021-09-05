import React, { useState } from 'react'

const handleGoodClick = () => {
  const newClicks = {
    good: good + 1
  }
}

const handleNeutralClick = () => {
  const newClicks = {
    neutral: neutral + 1
  }
}

const handleBadClick = () => {
  const newClicks = {
    bad: bad + 1
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <button>good</button> 
        <button>neutral</button> 
        <button>bad</button> 
      </div>

      <div>
        <p>good {setGood}</p>
        <p>neutral {setNeutral}</p>
        <p>bad {setBad}</p>
        <p>all {setGood}+{setBad}+{setNeutral}</p>
        <p>average ({setGood}+{setBad}+{setNeutral})/3</p>
        <p>positive ({setGood})/({setGood}+{setBad}+{setNeutral})</p>
      </div>
    </div>
  )
}

export default App