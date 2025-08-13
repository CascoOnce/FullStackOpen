import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value); // Muestra en consola el valor del input
    setNewName(event.target.value); // Setea el valor del input
  };

  const addName = (event) => {
    event.preventDefault(); // Evitar que se recargue la pagina
    // Nueva persona que se agrega
    const newPerson = {
      name: newName,
    };
    // existInList(1, persons);
    if(!isInList(newPerson, persons)){
      console.log('button clicked'); // Informar en consola
      setPersons(persons.concat(newPerson)); // Se agrega al arreglo
      setNewName(''); // Para que el input empiece de nuevo
    }else{
      // PLANILLA DE CADENAS
      alert(`${newPerson.name} is already added to phonebook`);
    }
    
  }

  const listNames = persons.map(name => 
    <div>{name.name}</div>
  )

  // const isInList = (value, list) => {
  //   const values = list.filter((element) => {
  //     return element.name == value.name;
  //   })
  //   if(values.length > 0) return true;
  //   else return false;
  // }

  const isInList = (value, list) => list.some(element =>
    element.name === value.name
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={addName} >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {listNames}
    </div>
  )
}

export default App