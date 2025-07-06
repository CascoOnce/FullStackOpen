const Saludo = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

// OPCION NO RECOMENDABLE
const App2 = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
// OPCION RECOMENDABLE
const App3 = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
}

const SaludoGuardians = () => {
  const guardians = [
    {name: 'Luis', age: 20},
    {name: 'Jorge', age: 19},
    {name: 'Matias', age: 20},
  ];

  return (
    <>
      <p>{guardians[0].name} {guardians[0].age}</p>
      <p>{guardians[1].name} {guardians[1].age}</p>
      <p>{guardians[2].name} {guardians[2].age}</p>
    </>
  );
}

const Friends = () => {
  const friends = ['Peter', 'Maya'];
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Hello from component")

  const name = "Peter";
  const age = 10; 

  return (
    <div>
      <h1>Greetings</h1>
      <SaludoGuardians/>
      <Saludo/>
      <Saludo/>
      <Saludo/>
      <Saludo/>
      <Hello name="Nick" age="20" />
      <Hello name={name} age={age} />
      <p>
        {a} plus {b} is {a+b}
      </p>
      <App2/>
      <App3/>
      <Friends/> {/*Renderiza horrible */}
    </div>
  );
}

export default App