const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total parts={course} />
    </div>
  );
};

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.parts[0].name} exercises={props.parts.parts[0].exercises} />
      <Part part={props.parts.parts[1].name} exercises={props.parts.parts[1].exercises} />
      <Part part={props.parts.parts[2].name} exercises={props.parts.parts[2].exercises} />
      <Part part={props.parts.parts[3].name} exercises={props.parts.parts[3].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const parts = props.parts.parts;
  // console.log(parts);
  const sum = parts.reduce((sum, part) => {
    // console.log(sum, part);
    return sum += part.exercises 
  }, 0);
  // console.log(sum);
  return (
    <p>
      <strong>
        total of {sum} exercises
      </strong>
    </p>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name:'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name:'React',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return <Course course = {course} />

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content parts={course}/>
  //     <Total parts={course} />
  //   </div>
  // );
};

export default App;
