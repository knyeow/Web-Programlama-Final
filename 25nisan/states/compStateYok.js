import React from 'react'

 function CompStateYok() {  
    // Asagida state yerine normal değişken tanımlandı. Dolayısıyla
    // değişken değiştiğinde sayfa otomatik render edilmiyor
    let deger=0; 

    function Arttir(){  
      // Arttır ve azalt ise fonksiyondur. 
      //Bu fonksiyonlar component dışında tanımlanırsa "deger" değişkenine erişimezler
        deger=deger+1;
        console.log(deger);
    }

    function Azalt(){
       // setDeger(deger-1);
       deger=deger-1;
       console.log(deger);
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

export default CompStateYok;