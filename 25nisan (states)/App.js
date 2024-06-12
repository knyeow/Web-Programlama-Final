
import './App.css';
import Userprops from './props/Userprops';
import Userprops2 from './states/Userprops2';

function App() {
 
  return (
    <div className="App">
 
   <Userprops name="Hande" age="30" job="Ressam"/>
  
   <Userprops2 name="Ahmet" age="22" job="Mimar"/>
    </div>
  );
}

export default App;
