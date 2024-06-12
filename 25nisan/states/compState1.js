import React, { useState } from 'react' // useState kullanıyorsak import etmek zorundayız

 function CompState1() {  // CompState1 componenttir
    // Asagida tanimlanan const return içinde tanımlanmaz
    const [deger,setDeger]=useState(0); // deger isimli state'e ilk deger verebiliriz burada.
  // state güncellendiğinde component otomatik olarak tekrar render ediliyor
    function Arttir(){  
      // Arttır ve azalt ise fonksiyondur. 
      //Bu fonksiyonlar component dışında tanımlanırsa "deger" state'ine erişimezler
        setDeger(deger+1);
      
    }

    function Azalt(){
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

export default CompState1;