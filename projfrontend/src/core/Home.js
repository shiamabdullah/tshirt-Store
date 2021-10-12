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
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home" description="Welcome to Tees">
      <h1>Home component</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-3 mb-3">
              <Card product={product}></Card>
            </div>
          );
        })}
      </div>
    </Base>
  );
}
