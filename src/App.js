import logo from './logo.svg';
import './App.css';
import Accordian from './componets/accordian';
import RandomColor from './componets/random-color';
import TicTacToe from './componets/tic-tac-toe';
import FeatureFlagGlobalState from './componets/feature-flag/context';
import FeatureFlag from './componets/feature-flag';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <TicTacToe/> */}
      <FeatureFlagGlobalState>
        <FeatureFlag/>
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
