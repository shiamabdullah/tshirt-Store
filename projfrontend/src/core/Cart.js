import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState([false]);

  useEffect(() => {
    setProducts(loadCart());
    //here the loadCart will fetch all the products from local storage
  }, [reload]);
  const loadAllProducts = (products) => {
    return (
      <div>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCard={true}
            addtoCart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h1>Checkout</h1>
      </div>
    );
  };

  return (
    <div>
      <Base title="Cart" description="Welcome to Checkout">
        <div className="row text-center">
          <div className="col-6">{loadAllProducts(products)}</div>
          <div className="col-6">{loadCheckout()}</div>
        </div>
      </Base>
    </div>
  );
};

export default Cart;
