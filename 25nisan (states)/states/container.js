import React, { useState } from 'react'

 function Container() {
  const [baslik,setBaslik]=useState("React Lectures");
  const x=5;
  return (
    <div >
      <InnerContainer title={baslik} number={x}></InnerContainer>
    </div>
  )
}



export  function InnerContainer(props) {
  return (
    <div style={{width:"400px", height:"400px", margin:"0px auto", border:"20px solid black",color:"blue"}}>
        <p>{props.title} </p>
        <p>{props.number} </p>
    </div>
  )
}

export default Container;