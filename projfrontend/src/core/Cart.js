import React, { useState, useEffect } from "react";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import PaymentB from "./PaymentB";
const Cart = () => {
  const [reload, setReload] = useState([false]);
  const [products, setProducts] = useState([]);

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
          <div className="col-6">
            {products.length > 0 ? (
              <PaymentB products={products} setReload={setReload} />
            ) : (
              <h3>Please login or add something in cart</h3>
            )}
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Cart;
