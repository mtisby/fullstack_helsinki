import React from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parts} parts: {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Part parts={part1.name} exercises={part1.exercises} />

      <Part parts={part2.name} exercises={part2.exercises}/>

      <Part parts={part3.name} exercises={part3.exercises}/>
      
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App