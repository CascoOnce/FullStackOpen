import { useState } from 'react'

const Filter = ({value, change}) => {
  return (
    <div>
      filter show with <input value={value} onChange={change} />
    </div>
  );
}

const PersonForm = (props) => {
  return (
    <div>
      <form>
        <div>
          name: <input value={props.name} onChange={props.changeName} />
        </div>
        <div>
          number: <input value={props.number} onChange={props.changeNumber} />
        </div>
        <div>
          <button type="submit" onClick={props.add} >
            add
          </button>
        </div>
      </form>
    </div>
  );
}

const Persons = ({list}) => {
  return (
    <div>
      {list}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setFilterPerson] = useState('');

  // INPUT
  const handleNameChange = (event) => {
    console.log(event.target.value); // Muestra en consola el valor del input
    setNewName(event.target.value); // Setea el valor del input
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value); // Muestra en consola el valor del input
    setNewNumber(event.target.value); // Setea el valor del input
  };
  const handleFilterChange = (event) => {
    console.log(event.target.value); // Muestra en consola el valor del input
    setFilterPerson(event.target.value); // Setea el valor del input
  };
  // BOTON
  const addNumbers = (event) => {
    event.preventDefault(); // Evitar que se recargue la pagina
    // Nueva persona que se agrega
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if(isInList(newPerson, persons)){
      alert(`${newPerson.name} is already added to phonebook`); // PLANILLA DE CADENAS
    }else{
      console.log('button clicked'); // Informar en consola
      setPersons(persons.concat(newPerson)); // Se agrega al arreglo
      setNewName(''); // Para que el input empiece de nuevo
      setNewNumber(''); // Para que el input empiece de nuevo
    }
  }
  // LIST
  const phonesToShsow = persons.filter(element => {
    const lower = element.name.toLowerCase();
    // console.log(lower);
    return lower.includes(filterPerson.toLowerCase());
  })
  const listNames = phonesToShsow.map(name => 
    <div key={name.id} >{name.name} {name.number}</div>
  )
  // VALIDACION REPETIDO
  const isInList = (value, list) => list.some(element =>
    element.name === value.name
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filterPerson} change={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        name={newName} changeName={handleNameChange}
        number={newNumber} changeNumber={handleNumberChange}
        add={addNumbers} />
      <h3>Numbers</h3>
      <Persons list={listNames} />
    </div>
  )
}

export default App