import React from 'react'
import PropTypes from 'prop-types'

// function component oluşturma kısayolu: rfce
// return içinde tek parent tag olmalı
function Ex2() {
  return (
    <div>
      <form>
<input type="text"></input>
<button>Gönder</button>

      </form>
    </div>
  )
}

// Ex2 component'ini kullanmak için export etmek gerekiyor
export default Ex2

