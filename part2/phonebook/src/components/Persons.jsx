const Persons = ({ personsToShow, deleteHandler }) => (
  <>
    {personsToShow.map((person) => (
      <Person key={person.name} person={person} deleteHandler={deleteHandler} />
    ))}
  </>
);

const Person = ({ person, deleteHandler }) => (
  <p>
    {person.name} {person.number}{" "}
    <button onClick={deleteHandler(person)}>delete</button>
  </p>
);

export default Persons;
