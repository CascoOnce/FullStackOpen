import { useState } from "react"
const randomNumber = Math.random();

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>
      {text}
    </button>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [votes, setVotes] =  useState(new Uint8Array(anecdotes.length));
  const [selected, setSelected] = useState(0);
  
  const randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  const changeAnecdote = () => {
    const random = randomNumber(anecdotes.length - 1, 0);
    console.log(random);
    setSelected(random);
  }

  const voteAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const random = randomNumber(anecdotes.length - 1, 0);
  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick = {voteAnecdote} text = {"vote"} />
      <Button handleClick = {changeAnecdote} text = {"next anecdotes"} />
    </div>
  );
};

export default App;