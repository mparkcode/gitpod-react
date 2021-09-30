import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className="App">
        <StatefulGreetingWithCallback greeting="I'm stateful"/>
    </div>
  );
}

export default App;
