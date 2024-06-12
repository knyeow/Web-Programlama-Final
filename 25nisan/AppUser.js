
import './App.css';
import Userprops from './props/Userprops';
import Userprops1 from './props/Userprops1';
import Userprops2 from './props/Userprops2';

function App() {
 
  return (
    <div className="App">
   <Userprops1 name="Semih" age="40" job="Mühendis">
    </Userprops1>

   <Userprops name="Hande" age="30" job="Ressam"/>
  
   <Userprops2 name="Ahmet" age="22" job="Mimar"/>
    </div>
  );
}

export default App;
