import { useState } from "react"

function Button({handleClick, text}) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

function App() {
  // STATES
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0.0);
  const [positive, setPositive] = useState(0.0);

  const calculateAverage = (good, neutral, bad) => {
    const point = good - bad;
    const votes = good + neutral + bad;
    return point/votes;
  }

  const calculatePositive = (good, neutral, bad) => {
    const positives = good;
    const votes = good + neutral + bad;
    return positives/votes;
  }

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    //console.log(updatedGood);
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    setAverage(calculateAverage(updatedGood, neutral, bad));
    setPositive(calculatePositive(updatedGood, neutral, bad));
  }
  
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    console.log(updatedNeutral);
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
    setAverage(calculateAverage(good, updatedNeutral, bad));
    setPositive(calculatePositive(good, updatedNeutral, bad));
  }
  
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    console.log(updatedBad);
    setBad(updatedBad);
    setTotal(good + neutral + updatedBad);
    setAverage(calculateAverage(good, neutral, updatedBad));
    setPositive(calculatePositive(good, neutral, updatedBad));
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGoodClick} text = {"good"} />
      <Button handleClick = {handleNeutralClick} text = {"neutral"} />
      <Button handleClick = {handleBadClick} text = {"bad"} />
      <h1>statistics</h1>
      <div>good {good} </div>
      <div>neutral {neutral} </div>
      <div>bad {bad} </div>
      <div>all {total} </div>
      <div>average {average} </div>
      <div>positive {positive} %</div>
    </div>
  )
}

export default App
