import React, { useState } from 'react' // useState kullanıyorsak import etmek zorundayız

 function CompState2() {
    // Asagida tanimlanan const return içinde tanımlanmaz
    const [deger,setDeger]=useState(0); // deger isimli state'e ilk deger verebiliriz burada.

    const Arttir=()=>{  // ok fonk seklinde tanımladık
        setDeger(deger+1);
    }

    const Azalt=()=>{
        setDeger(deger-1);
    }
  return (
    <div>
      
      <p><button onClick={()=>{console.log("Arrow Function buton tıklandı")}}>Arrow Function</button></p>
      <p><button onClick={Arttir}>Arttır</button></p>
      {deger}
      <p><button onClick={Azalt}>Azalt</button></p>
    </div>
  )
}

export default CompState2;