import { useState, useEffect } from 'react';
import contactService from "./services/contact";
import Notification from './components/Notification';

const Filter = ({value, change}) => {
  return (
    <div>
      filter show with <input value={value} onChange={change} />
    </div>
  );
};

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
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setFilterPerson] = useState('');
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState("success");

  // SERVER CALLS
  // GET
  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => {
        setPersons(initialContacts);
      });
  }, []);
  // POST or REPLACE - BOTON
  const addNumbers = (event) => {
    event.preventDefault(); // Evitar que se recargue la pagina
    // Nueva persona que se agrega
    const newPerson = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1,
    };
    if(isInList(newPerson, persons)){ // REPLACE
      if(confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one`)){
        const contact = persons.find(p => p.name === newName);
        const id = contact.id;
        contactService
          .update(id, newPerson)
          .then(initialContacts => {
            setPersons(persons.map(p => p.id !== id ? p: initialContacts)); // Se agrega al arreglo
          })
          .catch(error => {
            setStatus("error");
            setMessage(`Information of ${newPerson.name} has already been removed from server`);
            setTimeout(() => {
              setMessage(null);
            },3000);
            setPersons(persons.filter(n => n.id !== id));
          })
      }
    }else{ // POST
      contactService
        .create(newPerson)
        .then(initialContacts => {
          setStatus("success");
          setMessage(`Added ${initialContacts.name}`);
          setTimeout(() => {
            setMessage(null);
          }, 3000);
          setPersons(persons.concat(initialContacts)); // Se agrega al arreglo
        });
    };
    setNewName(''); // Para que el input empiece de nuevo
    setNewNumber(''); // Para que el input empiece de nuevo
  };
  // DELETE - BOTON
  const deleteNumber = (name, event) => {
    event.preventDefault();
    if(confirm(`Delete ${name.name}`)){
      console.log('Bailalo');
      contactService
        .remove(name.id)
        .then(initialContacts => {
          setPersons(persons.filter(p => p.id !== name.id))
        })
    }
  };
  
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
  // FILTRO DE CONTACTOS
  const phonesToShsow = persons.filter(element => {
    const lower = element.name.toLowerCase();
    return lower.includes(filterPerson.toLowerCase());
  });
  // LISTA DE CONTACTOS
  const listNames = phonesToShsow.map(name => 
    <div key={name.id} >
      {name.name} {name.number} <button onClick={(e) => deleteNumber(name, e)} >delete</button>
    </div>
    
  );
  // VALIDACION REPETIDO
  const isInList = (value, list) => list.some(element =>
    element.name === value.name
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={status} />
      <Filter value={filterPerson} change={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        name={newName} changeName={handleNameChange}
        number={newNumber} changeNumber={handleNumberChange}
        add={addNumbers} />
      <h3>Numbers</h3>
      <Persons list={listNames} />
    </div>
  );
};

export default App;