import logo from './logo.svg';
import './App.scss';
import Test from '../components/example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Test />

      </header>
    </div>
  );
}

export default App;
