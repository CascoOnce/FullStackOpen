import { useState } from "react"

function Button({handleClick, text}) {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

function Info({text, value}) {
  return (
    <div> {text} {value} </div>
  )
}

function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    console.log(updatedGood);
    setGood(updatedGood);
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    console.log(updatedNeutral);
    setNeutral(updatedNeutral);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    console.log(updatedBad);
    setBad(updatedBad);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGoodClick} text = {"good"} />
      <Button handleClick = {handleNeutralClick} text = {"neutral"} />
      <Button handleClick = {handleBadClick} text = {"bad"} />
      <h1>statistics</h1>
      <Info text = {"good"} value={good} />
      <Info text = {"neutral"} value={neutral} />
      <Info text = {"bad"} value={bad} />
    </div>
  )
}

export default App
