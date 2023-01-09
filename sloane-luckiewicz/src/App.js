import './App.css';
import Navbar from './components/Navbar/Navbar';
//import { Introduction } from './components/Hello/Introduction';
import { Introduction } from './components/Introduction/Introduction';

function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
