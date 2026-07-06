import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Counter = ({ text, count }) => (
  <p>
    {text} {count}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => setGood(good + 1);
  const countNeutral = () => setNeutral(neutral + 1);
  const countBad = () => setBad(bad + 1);

  return (
    <div>
      <Heading text="give feedback" />
      <Button onClick={countGood} text="good" />
      <Button onClick={countNeutral} text="neutral" />
      <Button onClick={countBad} text="bad" />

      <Heading text="statistics" />
      <Counter text="good" count={good} />
      <Counter text="neutral" count={neutral} />
      <Counter text="bad" count={bad} />
    </div>
  );
};

export default App;
