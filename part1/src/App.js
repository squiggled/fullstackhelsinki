const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => { //Content does not render any names of parts itself. it renders Part components, and the Part components render the name and no. of exercises of one part

  return (
    <div>
    <Part coursename={props.parts[0].name}  exercise ={props.parts[0].exercises}/> 
    <Part coursename={props.parts[1].name}  exercise ={props.parts[1].exercises} />
    <Part coursename={props.parts[2].name}  exercise ={props.parts[2].exercises} /> 
    </div>
  )
}

const Part = (props) => { 
  return (
    <p>
      {props.coursename} {props.exercise}
    </p>
  
  )
}
const Total = (props) => {
  var total = props.parts.reduce(function(sum, a) {
    return sum + a.exercises;
  }, 0);
  return (
    <p>
     Number of exercises {total}
    </p>
  )
}
export default App