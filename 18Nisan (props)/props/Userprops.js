import React from 'react'

export default function Userprops(props) {
  return (
    <div>
      <ul>
        <li>İsim : Semih</li>
        <li>Yaş: 40</li>
        <li>Meslek : Mühendis</li>
        </ul> 

        <ul>
        <li>İsim : {props.name}</li>
        <li>Yaş: {props.age}</li>
        <li>Meslek : {props.job}</li>
        </ul> 
    </div>
  )
}
