export function Stats({ selectedGoal }) {
  return (
    <div>
      <h2>Stats</h2>
      <h3>{selectedGoal.input}</h3>
      <p>Deadline is: {selectedGoal.deadline}</p>
    </div>
  );
}
