import React from "react";
import { useState, useEffect } from "react";
import Base from "./Base";
import { getProducts } from "./helper/coreapicalls";
import "../styles.css";
import Card from "./Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      console.log(data);

      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };
  console.log(products);
  useEffect(() => {
    loadAllProducts();
  });

  return (
    <Base title="Home" description="Welcome to Tees">
      <h1>Home component</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card></Card>
            </div>
          );
        })}
      </div>
    </Base>
  );
}
