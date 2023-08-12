import React, { useState } from 'react';
import Header from './Header';
import { GoalTracker } from './GoalTracker';
import { InputBar } from './InputBar';
import { Stats } from './Stats';

const exampleGoals = [
  {
    id: 118836,
    input: 'Make Some Goals 💪',
    deadline: '',
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

  return (
    <>
      <Header />
      <InputBar
        onAddGoal={handleGoalAddition}
        deadline={deadline}
        setDeadline={setDeadline}
      />
      <div className="container">
        <div className="left-side">
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
            <Stats selectedGoal={selectedGoal} />
          </div>
        )}
      </div>
    </>
  );
}
