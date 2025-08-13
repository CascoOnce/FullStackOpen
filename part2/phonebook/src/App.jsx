import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const newPersons = {
      name: newName,
    };
    console.log('button clicked');
    setPersons(persons.concat(newPersons));
    setNewName('');
  }

  const listNames = persons.map(name => 
    <div>{name.name}</div>
  )

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