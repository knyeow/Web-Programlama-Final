import React from 'react'
import { Link } from 'react-router-dom'

export default function RegForm({param1,param2}) {
  return (
    <div>
      <form>
      <input type="text" name="isim" value={param1.isim} onChange={param2} placeholder="İsim soyisim giriniz"></input>
      <select name="sehir" value={param1.sehir} onChange={param2}>
      <option value="">Şehir seçiniz</option>
      <option value="İstanbul">İstanbul</option>
      <option value="Ankara">Ankara</option>
      <option value="İzmir">İzmir</option>
      </select>
      <input type="date" name="dtarihi" value={param1.dtarihi} onChange={param2}/>
      <input type="color" name="renk" value={param1.renk} onChange={param2}></input>
      <textarea cols="20" rows="5" name="adres" placeholder="Adres giriniz" value={param1.adres} onChange={param2}></textarea>
      <Link to="/listpage"><button>Gönder</button></Link>     {/*.js dosyasının uzantısını veriyoruz*/}

      </form>
    </div>
  )
}
