import React, { useState, useEffect } from "react";

function Main() {
  const [count, setCount] = useState(0);

  // useEffect(()=>{},[count]);
  useEffect(() => {
    console.log("useeffect ->" + count);
  }, [count]);

  const person = {
    name: "bora",
    surname: "sikim",
    age: 31,
  };

  const { name: name31, surname } = person;
  const cars = ["F30", "rs7", "RS6"];

  const [bestcar, worstcar] = cars;
  const { [2]: medcar } = cars;

  return (
    <div>
      <header>
        <div className="bg-danger">
          <hr></hr>
          <p>useState - useEffect</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>

        <div className="bg-warning">
          <hr></hr>
          <p>Destructuring</p>
          <pre>
            {name31} {surname} {bestcar} {worstcar} {medcar}
          </pre>
        </div>
      </header>
    </div>
  );
}

export default Main;
