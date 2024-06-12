import React from 'react'
/*
export default function Component5(props) {
   props.user // şeklinde de alınır.
}
*/
export default function Component5({ user }) {
  return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
  )
}


