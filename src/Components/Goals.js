import Button from './Button';

export function Goals({
  goal,
  onDeleteGoal,
  setStatsIsOpen,
  statsIsOpen,
  onSelect,
}) {
  return (
    <div>
      <li
        className="list-of-goals"
        onClick={() => goal.id && goal.isCompleted === true}
      >
        <strong>{goal.input}</strong>
        <p onClick={() => onDeleteGoal(goal.id)}>✖️</p>
      </li>
      <Button
        onClick={() => {
          setStatsIsOpen(!statsIsOpen);
          onSelect(goal);
        }}
      >
        expand
      </Button>
    </div>
  );
}
