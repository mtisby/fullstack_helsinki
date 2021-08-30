import React from 'react'

const Header = (props) => {
  return (
    <p>
      {props.course}
    </p>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.parts}
    </p>
  )
}


const Total = (props) => {
  return (
    <p>
      {props.total}
    </p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={part1} />
      <Total exercises={exercises1} />

      <Content parts={part2} />
      <Total exercises={exercises2} />

      <Content parts={part3} />
      <Total exercises={exercises3} />
      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App