import { useState } from "react";

const Heading = ({ text }) => <h2>{text}</h2>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Controls = ({ countGood, countNeutral, countBad }) => {
  return (
    <>
      <Button onClick={countGood} text="good" />
      <Button onClick={countNeutral} text="neutral" />
      <Button onClick={countBad} text="bad" />
    </>
  );
};

const StatisticLine = ({ text, value, extra = "" }) => (
  <p>
    {text} {value} {extra}
  </p>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  // console.log(all)
  // console.log(all === 0)
  if (all === 0) return <p>No feedback given</p>;
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} extra="%" />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countGood = () => setGood(good + 1);
  const countNeutral = () => setNeutral(neutral + 1);
  const countBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good * 100) / all || 0;

  return (
    <div>
      <Heading text="give feedback" />
      <Controls
        countGood={countGood}
        countNeutral={countNeutral}
        countBad={countBad}
      />

      <Heading text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
