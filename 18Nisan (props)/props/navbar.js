import React from 'react'
// Navbar componentini alttaki gibi ok (arrow) fonksiyonu (Ecmascript6 versiyonu) olarak tanımlayabiliriz. 
// ok fonksiyonunu Navbar değişkenine attık
// Ok fonksiyonu yerine export default function Navbar { } olarak da tanımlayabilirdik.
 const Navbar=()=> {
   return (
    <div className="navbar">
      <a href="#">Anasayfa</a>
      <a href="#">Hakkımızda</a>
      <a href="#">İletişim</a>
      <a href="#">Bize ulaşın</a>
    </div>
  )
}

export const AltNavbar=()=>{
    return (
        <div className="altnavbar">
        </div>
      )
}



export function Govde() {
  return (
    <div className="govde">
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <button> Register</button>
    </div>
  )
}


export default Navbar;