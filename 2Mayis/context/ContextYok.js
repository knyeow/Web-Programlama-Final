import { useState } from "react";
import ReactDOM from "react-dom/client";
import Component5 from "./Component5";
// Bir component'in içinden çağrılan component'e child component denir.
// Burada Component2,Component3,Component4,Component5 child component'lerdir.
function ContextYok() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      {/*Aşağıdaki gibi de yazılır. 
      Yukarıdaki yazım string concatenate şeklindeki yazımdır*/}
      <h1>Hello {user} !</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}


export default ContextYok;