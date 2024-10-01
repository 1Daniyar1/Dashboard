import './App.css';
import Dashboard from './components/dashboard.js';
import DailyTasks from './components/exercises.js';
import AppMenu from './components/menu.js';

function App() {
  return (
    <div>
      <Dashboard />
      <DailyTasks />
      <AppMenu />
    </div>
  );
}

export default App;
