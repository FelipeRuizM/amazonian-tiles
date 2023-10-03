import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Icons } from './components/Icons';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Icons />
    </div>
  );
}

export default App;
