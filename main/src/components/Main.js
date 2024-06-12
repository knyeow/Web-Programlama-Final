import React, { useState, useEffect } from "react";

function PropExample(props) {
  return (
    <div>
      {props.brand.name} <br></br> {props.brand.model}
    </div>
  );
}

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

  const carInfo = { name: "bmw", model: "mustang" };

  return (
    <div>
      <header>
        <div className="bg-danger">
          <hr></hr>
          <h2>useState - useEffect</h2>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>

        <div className="bg-warning">
          <hr></hr>
          <h2>Destructuring</h2>
          <pre>
            {name31} {surname} {bestcar} {worstcar} {medcar}
          </pre>
        </div>

        <div className="bg-danger">
          <hr></hr>
          <h2>Props</h2>
          <p>
            <PropExample brand={carInfo} />
          </p>
        </div>
      </header>
    </div>
  );
}

export default Main;
