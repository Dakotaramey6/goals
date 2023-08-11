import { Goals } from './Goals';

export function GoalTracker({
  goals,
  onDeleteGoal,
  setStatsIsOpen,
  statsIsOpen,
  onSelect,
}) {
  return (
    <ul className="goal-tracker">
      {goals.map((goal) => (
        <Goals
          goal={goal}
          key={goal.id}
          onDeleteGoal={onDeleteGoal}
          setStatsIsOpen={setStatsIsOpen}
          statsIsOpen={statsIsOpen}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
