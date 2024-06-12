import React from 'react'
// Ilkdersim1, burada bir componenttir.
function Ilkdersim1() {

        const names=['ahmet','ayse','mehmet'];
        const int= Math.floor (Math.random()*3);
      
  
  return (
    <div className="App">
      {names[int]}
      
    </div>
  );
}




export default Ilkdersim1;