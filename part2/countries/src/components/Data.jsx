import { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({data}) => {
  // CONTROL DE VARIABLES
  const [weather, setWeather] = useState(null); // TENDRA TODA LA INFO DEL CLIMA
  const languages = Object.entries(data.languages).map(([key, value]) => 
    <li key={key} >{value}</li> // GUARDA LOS LENGUAJES DEL PAIS
  );
  const api_cloud_key = import.meta.env.VITE_CLOUD_API_KEY;
  const link = `https://api.openweathermap.org/data/3.0/onecall?lat=${data.capitalInfo.latlng[0]}&lon=${data.capitalInfo.latlng[1]}&appid=${api_cloud_key}`;
  // console.log(link);
  // LLAMADA A LA API DEL CLIMA
  useEffect(() => {
    axios
      .get(link)
      .then(response => {
        setWeather(response.data);
      })
  }, [data]);

  if(weather === null || weather.current.temp === null){
    return (
      <div>
        <h1>{data.name.common}</h1>
        <div>Capital {data.capital}</div>
        <div>Area {data.area}</div>
        <h2>Languages</h2>
        <ul>
          {languages}
        </ul>
        <img src={data.flags.png} alt="" />
        <h2>Weather in {data.capital}</h2>
      </div>
    );
  }else{
    return (
      <div>
        <h1>{data.name.common}</h1>
        <div>Capital {data.capital}</div>
        <div>Area {data.area}</div>
        <h2>Languages</h2>
        <ul>
          {languages}
        </ul>
        <img src={data.flags.png} alt="" />
        <h2>Weather in {data.capital}</h2>
        <div>Temperature {Number(weather.current.temp - 273.15).toFixed(2)}</div>
        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="" />
        <div>Wind {weather.current.wind_speed} m/s</div>
      </div>
    );
  }
  
}

const Data = ({countriesToShow, setFilter}) => {
  if(countriesToShow === null){
    return (
      <div>Too many matches, specify another filter.</div>
    );
  }else{
    const num = countriesToShow.length;
    if (num > 10) {
      return (
        <div>Too many matches, specify another filter.</div>
      );
    } else if (num > 1) {
      return (
        <>
          {countriesToShow.map(name => 
            <div key={name.cca2} >
              {name.name.common} 
              <button onClick={() => setFilter(name.name.common)} >Show</button>
            </div>
          )}
        </>
      )
    } else if (num === 1){
      return (
        <div>
          <Country data={countriesToShow[0]} />
        </div>
      );
    } else {
      return (
        <div>Not found</div>
      );
    }
  }
}

export default Data;