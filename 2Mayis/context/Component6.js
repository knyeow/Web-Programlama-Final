import React,{useContext} from 'react'
import { UserContext } from './ContextVar';


// Yukarıda context'imizi import etmek durumundayız.
export default function Component6() {
    const contdegiskeni = useContext(UserContext);
  return (
    <>
        <h1>Component 5</h1>
        <h2>{`Hello Context ${contdegiskeni} again!`}</h2>
      </>
  )
}


