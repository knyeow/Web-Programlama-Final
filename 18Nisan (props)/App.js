
import './App.css';
import User from './examples/User';
import Ex2 from './examples/Ex2';
import Ex1 from './examples/Ex1';
import Ilkdersim from './props/ilkdersim';
import Ilkdersim1 from './props/ilkdersim1';
// App ile Ex2 aynı yerde değil. App bir üst klasörde.
// import Ex2 from './examples/Ex2.js' de yazılabilir
function App() {
 
  return (
    <div className="App">
      <h1 style={{color:"red"}}>Examples</h1>
      { /* Bir component birden çok kez kullanılabilir*/}
     <Ex2/>
     <Ex2/>
     <Ex2/>
     <Ex1/>
        <div>
          <h4>Bootstrap kullanılan başlık</h4>
        </div>
        <User/>
        <Ilkdersim/>
        <Ilkdersim1/>
    </div>
  );
}

export default App;
