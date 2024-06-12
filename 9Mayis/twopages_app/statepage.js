import React,{useState} from 'react'
import {BrowserRouter as Router,Routes, Link, Route} from 'react-router-dom' 
import RegForm from './regForm';
import Listpage from './listpage';


export default function Statepage() {
  // her bir form inputu için state tanımlamak yerine tek bir state (form) tanımlarız.Bu form değişkeni object tipinde olacak
  const [form,setForm]=useState({isim:'',sehir:'',dtarihi:'', renk:'',adres:''});
  const form_change=(e)=>{ 
      setForm({...form,[e.target.name]:e.target.value});// ...form ile form objesinin sadece ilgili değeri güncellenir
    
      console.log(form);
  }
  return (
    <div className="App">
      <h2>Formu Doldurunuz</h2>
      {/*The exact param disables the partial matching for a route and
       makes sure that it only returns the route if the path is an EXACT match to the current url.*/}
     <Router>
       <Routes>
          <Route exact path="/" element={<RegForm param1={form} param2={form_change}/>}  />
           <Route path="/listpage" element={<Listpage param1={form}/>}  />
        </Routes>  
        </Router>
    </div>
  )
}
