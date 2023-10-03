import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Icons } from './components/Icons';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Icons />
      <Contact />
    </div>
  );
}

export default App;
