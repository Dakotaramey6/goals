import { useState } from 'react';
import Header from './Header';
import { GoalTracker } from './GoalTracker';
import { InputBar } from './InputBar';
import { Stats } from './Stats';

const exampleGoals = [
  {
    id: 118836,
    input: 'Learn React',
    deadline: null,
    completed: false,
  },
  {
    id: 234436,
    input: 'Make cool stuff',
    deadline: null,
    completed: false,
  },
];

export default function App() {
  const [goals, setGoals] = useState(exampleGoals);
  const [statsIsOpen, setStatsIsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [deadline, setDeadline] = useState('');

  function handleSelection(goal) {
    setSelectedGoal((cur) => (cur?.id === goal.id ? null : goal));
  }

  function handleGoalAddition(addedGoal) {
    setGoals((goals) => [...goals, addedGoal]);
  }

  function handleDeleteItem(id) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  function handleDeadlineModify(toChange) {
    goals.map((goal) =>
      goal.deadline === null ? setDeadline(toChange) : null
    );
  }

  return (
    <>
      <div className="left-side">
        <Header />
        <InputBar onAddGoal={handleGoalAddition} deadline={deadline} />
        <GoalTracker
          goals={goals}
          onDeleteGoal={handleDeleteItem}
          setStatsIsOpen={setStatsIsOpen}
          statsIsOpen={statsIsOpen}
          onSelect={handleSelection}
        />
      </div>
      {statsIsOpen && (
        <div className="right-side">
          <Stats
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
            setDeadline={setDeadline}
            onDeadLineChange={handleDeadlineModify}
          />
        </div>
      )}
    </>
  );
}
