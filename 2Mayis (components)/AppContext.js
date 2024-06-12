
import './App.css';
import ContextVar from './context/ContextVar';
//import ContextYok from './context/ContextYok';


function App() {
  return (
    <div className="App">
      {/**ContextYok componentini çalıştırmak için
       * aşağıda ContextVar yerine ContextYok yazabilirsiniz.   */}
     <ContextVar/>
    </div>
  );
}

export default App;
