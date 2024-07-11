import './App.css';
import Keyboard from './containers/PinCode/Keyboard/Keyboard';
import Display from './containers/PinCode/Display/Display';

const App = () => {
  return (
    <div className="App">
      <Display />
      <Keyboard />
    </div>
  );
};

export default App;
