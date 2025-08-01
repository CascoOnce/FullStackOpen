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
    <h2>{props.course.name}</h2>
  );
};

const Content = (props) => {
  const parts = props.parts.parts;
  // console.log(parts);
  const eleParts = parts.map(element => 
    <Part key = {element.key} part = {element.name} exercises = {element.exercises} />
  );
  // console.log(eleParts);
  return (
    <div>
      {eleParts}
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        },
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
      ]
    },
  ];

  const elements = courses.map(course =>
    <Course course = {course} />
  );

  // console.log(elements);

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>
        <Course course = {course} />
      )}
    </div>
  )

  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content parts={course}/>
  //     <Total parts={course} />
  //   </div>
  // );
};

export default App;
