import { useState } from 'react';
import Button from './Button';

export function InputBar({ onAddGoal, deadline }) {
  const [input, setInput] = useState('');

  function handleAddGoals(e) {
    e.preventDefault();
    if (!input) return;
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
    console.log(newGoal);
  }
  return (
    <div>
      <form className="form-input-bar" onSubmit={handleAddGoals}>
        <input
          type="text"
          placeholder="Place Goals Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <Button>Submit Goal</Button>
      </form>
    </div>
  );
}
