import React from 'react'

function Header(props) {
  return (
    <div style={{width:"inherit", height:"50px", backgroundColor:"fuchsia", color:"blue"}}>
     Header'a gelen :{props.param}
    </div>
  );
}
export default  Header