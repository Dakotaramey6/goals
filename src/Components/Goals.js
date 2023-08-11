import Button from './Button';

export function Goals({
  goal,
  onDeleteGoal,
  setStatsIsOpen,
  statsIsOpen,
  onSelect,
}) {
  return (
    <li
      className="list-of-goals"
      onClick={() => goal.id && goal.isCompleted === true}
    >
      {goal.input}
      <p onClick={() => onDeleteGoal(goal.id)}>❌</p>
      <Button
        onClick={() => {
          setStatsIsOpen(!statsIsOpen);
          onSelect(goal);
        }}
      >
        expand
      </Button>
    </li>
  );
}
