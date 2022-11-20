import './App.css';
// import { Switch, Route } from 'react-router-dom'
import { MealContainer } from './components/mealContainer';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <MealContainer />
    </div>
  );
}

export default App;
