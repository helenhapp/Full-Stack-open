import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import phonebook from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    phonebook.getAll().then((initialData) => setPersons(initialData));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((p) => p.name === newName);
    if (existingPerson) {
      const confirmMessage = `${existingPerson.name} is already added to phonebook, replace the old number with a new one?`;
      if (window.confirm(confirmMessage)) {
        const changedPerson = { ...existingPerson, number: newNumber };
        phonebook
          .updatePerson(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((p) => p.id === returnedPerson.id ? returnedPerson : p));
            setNewName("");
            setNewNumber("");
          });
      } else {
        setNewName("");
        setNewNumber("");
      }
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    phonebook.addPerson(newPerson).then((addedPerson) => {
      setPersons(persons.concat(addedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const handleNameChange = (e) => setNewName(e.target.value);
  const handleNumberChange = (e) => setNewNumber(e.target.value);
  const filterPersons = (e) => setSearch(e.target.value.toLowerCase());

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(search),
  );

  const deleteHandler = (person) => () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebook
        .deletePerson(person.id)
        .then(() => setPersons(persons.filter((p) => p.id !== person.id)));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterPersons={filterPersons} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
