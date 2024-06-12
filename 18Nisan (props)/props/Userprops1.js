import React from 'react'

export default function Userprops1(props) {
    const {name,age,job}=props;
  return (
    <div>
  
        <ul>
        <li>İsim : {name}</li>
        <li>Yaş: {age}</li>
        <li>Meslek : {job}</li>
        </ul> 
    </div>
  )
}
