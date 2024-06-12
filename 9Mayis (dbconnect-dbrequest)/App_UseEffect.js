

import './App.css';
import React, { useState,useEffect } from 'react'


function App() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    
    // useEffect component ilk yüklendiğinde, sonraki yüklenmelerde ve
    // state değiştiğinde çalışır.
    // Dizi şeklindeki 2. parametresi dizidir.
        // Bu diziye dependency list denir
        //Bu parametreyi vermezsek her değişimde çalışır
    // Bu dizi verilmişse, sadece bu elemanlar değiştiğinde çalışır.
    // dizi verilmiş ancak boşsa, sadece ilk yüklendiğinde useEffect çalışır
   
    useEffect(() => {
      
      console.log("useEffect");
      document.title = `You clicked ${count} times`;
    
    },[count]);

    useEffect(() => {
      
      console.log("useEffect");
      document.title = `You clicked ${count} times`;
    
    },[count1]);
  
    useEffect(log1,count1);

    useEffect(() => log1,count1)
  
    function log1()
    {
      console.log(31);
    }

    return (
      <div>
        
        <button onClick={() => setCount(count + 1)}>
          Click me 
        </button>
        <p>You clicked {count} times</p>
        
        <button onClick={() => setCount1(count1 + 1)}>
          Click me 
        </button>
        <p>You clicked {count1} times</p>
        {console.log("something")}
      </div>
    );
}

export default App; 
