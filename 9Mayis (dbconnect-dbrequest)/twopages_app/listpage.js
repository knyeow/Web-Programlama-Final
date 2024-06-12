import React from 'react'
import { Link } from 'react-router-dom'

export default function Listpage({param1}) {
  return (
    <div>
      <h1>Form verisi</h1>
      <h5>İsim Soyisim: {param1.isim}</h5>
      <h5>Şehir: {param1.sehir}</h5>
      <h5>Doğum Tarihi: {param1.dtarihi}</h5>
      <h5>Favori Renk: {param1.renk}</h5>
      <h5>Adres: {param1.adres}</h5>
      <Link to="/"><button>Geri</button></Link>
    </div>
  )
}
