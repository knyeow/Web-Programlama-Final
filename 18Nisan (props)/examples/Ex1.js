import React from 'react'
import PropTypes from 'prop-types'

function Ex1() {
  const isim="pelin"
  const isAuth=false
  return (
    <div>
       1+1 <br></br>
      pelin görgel web programlama dersi
     <h4>{"web programlama".toUpperCase()}</h4>
      {1+2}
      <p>isim</p>
      <p>{isim}</p>
      {
        isAuth ? <p>Kullanıcı tanımlı</p>
        : null
      }
    </div>
  )
}


export default Ex1

