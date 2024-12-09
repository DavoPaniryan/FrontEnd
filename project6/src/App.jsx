import { useState } from 'react';
import './App.css';
import { TimerList } from './components/timer-list';
import { KillList } from './components/kill-list';

function App() {
  const [timers, setTimers] = useState([]);
   const [killed,setKilled] = useState([]);
   
   function handleRemove(id,timeEnd,startingDate,duration) {
    setTimers(timers.filter(timer => {
      if(timer.id === id) {
        setKilled([...killed,{id,timeEnd,startingDate,duration}])
        return undefined;
      }
      return timer
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-4 rounded mb-4"
        onClick={() => setTimers([...timers, { id: Date.now() }])}
      >
        Create
      </button>
      <div className="flex w-full max-w-7xl space-x-4">
        <div className="flex-shrink-0 w-1/2">
          <KillList 
          killed={killed}
          onSetTimers={setTimers}
          onSetKilled={setKilled}
          />
        </div>
        <div className="flex-grow">
          <TimerList timers={timers} 
            onDelete={handleRemove}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
