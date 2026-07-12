import { useState, useEffect } from "react";
import Country from "./components/Country";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

  const url = `https://studies.cs.helsinki.fi/restcountries/api/all`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const matchedCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(value.toLowerCase()),
  );

  const renderResults = () => {
    if (!value) return null;

    if (matchedCountries.length === 0) return <p>Found 0 matches</p>;

    if (matchedCountries.length === 1) {
      const matchedCountry = matchedCountries[0];
      // prettier-ignore
      const foundObj = {
        name: matchedCountry.name.common,
        capital: matchedCountry.capital ? matchedCountry.capital.join(", ") : "No capital",
        area: matchedCountry.area,
        languages: matchedCountry.languages,
        flag: { png: matchedCountry.flags.png, alt: matchedCountry.flags.alt },
      };
      return <Country country={foundObj} />;
    }

    if (matchedCountries.length > 1 && matchedCountries.length <= 10) {
      return (
        <ul>
          {matchedCountries.map((c) => (
            <li key={c.name.common}>
              {c.name.common} <button onClick={showCountry(c)}>Show</button>
            </li>
          ))}
        </ul>
      );
    }

    return <p>Too many matches! Please specify another filter.</p>;
  };

  const showCountry = (country) => () => {
    setValue(country.name.common);
  };

  return (
    <div>
      <p>
        Find countries: <input value={value} onChange={handleChange} />
      </p>

      {renderResults()}
    </div>
  );
};

export default App;
