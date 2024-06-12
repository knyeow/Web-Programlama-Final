import React, { useState } from 'react'
import Header from './header';

export default function OuterContainer2(props) {
  
  return (
    <div style={{width:"400px", height:"400px", margin:"0px auto", border:"3px solid black",color:"red"}}>
        <p>{props.title} </p>
        <p>{props.number} </p>
        <Header param={props.title}></Header>
    </div>
  )
}

