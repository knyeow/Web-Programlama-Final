import { useState,createContext,useContext  } from "react";
import ReactDOM from "react-dom/client";
import Component6 from "./Component6";
// Bir component'in içinden çağrılan component'e child component denir.
// Burada Component2,Component3,Component4,Component5 child component'lerdir.

// context değişkeninin farklı bir dosyadaki component'e erişmesini istiyorsak
// ve o dosyada import etmek için export olarak tanımlamak gerek
export const UserContext = createContext();
export const x=4;
function ContextVar() {
  const [user, setUser] = useState("Jesse Hall");
  
  return (
    <>
   
   {/**Context değişkenimiz Provider bloğu içindeki tüm 
    * componentler ve onların da child component'leri 
    * tarafından global olarak erişilir  */}
     <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
         <Component2  />
     </UserContext.Provider>
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3/>
    </>
  );
}

function Component3() {
    const contdegiskeni = useContext(UserContext);
  return (
    <>
      <h2>{`Hello Context ${contdegiskeni} again!`}</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component6/>
    </>
  );
}



export default ContextVar;
