import React, { useState } from 'react' // useState kullanıyorsak import etmek zorundayız

 function CompState() {
    // Asagida tanimlanan const return içinde tanımlanmaz
    const [deger,setDeger]=useState(0); // deger isimli state'e ilk deger verebiliriz burada.
  return (
    <div>
      
      <p><button onClick={()=>{console.log("Arrow Function buton tıklandı")}}>Arrow Function</button></p>
      <p><button onClick={()=>{setDeger(deger+1)}}>Arttır</button></p>
      {deger}
      <p><button onClick={()=>{setDeger(deger-1)}}>Azalt</button></p>
    </div>
  )
}

export default CompState;

