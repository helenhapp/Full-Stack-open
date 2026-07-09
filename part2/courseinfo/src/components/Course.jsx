const Course = ({ course }) => {
  const sumOfExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0,
  );

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={sumOfExercises} />
    </div>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ total }) => (
  <p>
    <b>total of {total} exercises</b>
  </p>
);

export default Course;
