import React, { useState } from 'react'
import OuterContainer2 from 'C:/2023-2024/subat/web/webprog/src/props/outercontainer2.js';

 function OuterContainer() {
  const [baslik,setBaslik]=useState("React Lectures"); 
  const x=5;
  return (
    <div >
      <OuterContainer2 title={baslik} number={x}></OuterContainer2>
    </div>
  )
}



export default OuterContainer;