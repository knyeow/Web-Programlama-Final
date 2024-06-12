
import './App.css';

import CompState1 from './states/compState1';
import CompStateYok from './states/compStateYok';
import CompState2 from './states/compState2';

function App() {
  return (
    <div className="App">
      <CompState1></CompState1>
      <CompState2></CompState2>
      <CompStateYok></CompStateYok>
    </div>
  );
}

export default App;
