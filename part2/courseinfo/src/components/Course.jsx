const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
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

export default Course;