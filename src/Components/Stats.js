import Button from './Button';

export function Stats({ selectedGoal, setDeadline, onDeadLineChange }) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeadLineChange(selectedGoal.deadline);

    setDeadline('');
  }
  return (
    <div>
      <h2>Stats</h2>
      <h3>{selectedGoal.input}</h3>
      <p>Current Deadline is: {selectedGoal.deadline}</p>
      <form onSubmit={handleSubmit}>
        <label>Set new deadline?</label>
        <input
          type="text"
          value={selectedGoal.deadline}
          onChange={(e) => setDeadline(e.target.value)}
        ></input>
        <Button>Enter</Button>
      </form>
    </div>
  );
}
