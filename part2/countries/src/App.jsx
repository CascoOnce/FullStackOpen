import { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './components/Data';

const App = () => {
  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data);
      })
  }, []);

  const handleFilterChange = (event) => setFilter(event.target.value);

  var countriesToShow = null;
  if(countries !== null){
    countriesToShow = countries.filter(element => {
      const lower = element.name.common.toLowerCase();
      return lower.includes(filter.toLowerCase());
    });
  }

  return (
    <div>
      <div>
        find countries <input type="text" value={filter} onChange={handleFilterChange} />
      </div>
      <Data countriesToShow={countriesToShow} setFilter={setFilter} />
    </div>
  );
};

export default App;