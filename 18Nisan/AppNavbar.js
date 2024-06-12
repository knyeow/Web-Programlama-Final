
import './App.css';
import Header from './props/header';
import Navbar,{ AltNavbar,Govde} from './props/navbar';



function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <AltNavbar/>
    <Govde></Govde>
    <Header param="Burası props ile geldi"></Header>
    </div>
  );
}

export default App;
