const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      {country.languages ? <h2>Languages</h2> : null}
      <ul>
        {Object.entries(country.languages || {}).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>

      <img src={country.flag.png} alt={country.flag.alt} />
    </div>
  );
};

export default Country;
