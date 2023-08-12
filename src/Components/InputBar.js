import { useState } from 'react';
import Button from './Button';

export function InputBar({ onAddGoal, deadline, setDeadline }) {
  const [input, setInput] = useState('');

  function handleAddGoals(e) {
    e.preventDefault();
    if (!input || !deadline) return;
    const id = crypto.randomUUID();
    const isCompleted = false;

    const newGoal = {
      id,
      input,
      deadline,
      isCompleted,
    };

    onAddGoal(newGoal);
    setInput('');
    setDeadline('');
    console.log(newGoal);
  }
  return (
    <div className="form-input-bar">
      <form onSubmit={handleAddGoals}>
        <input
          type="text"
          placeholder="Place Goals Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Place Deadline Here"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        ></input>
        <Button>Submit Goal</Button>
      </form>
    </div>
  );
}
