const Country = ({data}) => {
  const languages = Object.entries(data.languages).map(([key, value]) => 
    <li key={key} >{value}</li>
  );

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
    </div>
  );
}

const Data = ({countriesToShow}) => {
  if(countriesToShow === null){
    return (
      <div>Too many matches, specify another filter</div>
    );
  }else{
    const num = countriesToShow.length;
    if (num > 10) {
      return (
        <div>Too many matches, specify another filter</div>
      );
    } else if (num > 1) {
      return (
        <>
          {countriesToShow.map(name => 
            <div key={name.cca2} >{name.name.common} </div>
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