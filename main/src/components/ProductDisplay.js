import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../ProductsData";

function ProductDisplay() {
  const { id,param2 } = useParams();

  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{ProductsData[id - 1].name}</h1>{" "}
        <p>{ProductsData[id - 1].description}</p>
        <p>{ProductsData[id-1].price} </p>
        <p>{param2}</p>
      </div>
    </div>
  );
}

export default ProductDisplay;