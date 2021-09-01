import React from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  console.log(props.parts.name);
  return (
    <div>
      <p>
        {props.parts[0].name} parts: {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name} parts: {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name} parts: {props.parts[2].exercises}
      </p>
    </div>

    
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        total: {props.parts[0].exercises + props.parts[1].exercise + props.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }]
  
  return (
    <div>
      <Header course={course} />

      <Part parts={parts} />
      
      <Total parts={parts} />
      
    </div>
  )
}

export default App