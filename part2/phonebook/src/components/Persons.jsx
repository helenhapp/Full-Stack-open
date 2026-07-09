const Persons = ({ personsToShow }) => (
  <>
    {personsToShow.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </>
);

const Person = ({ person }) => (
  <p>
    {person.name} {person.number}
  </p>
);

export default Persons;
