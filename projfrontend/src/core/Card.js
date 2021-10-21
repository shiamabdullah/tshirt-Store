import React, { useState } from "react";
import { Redirect } from "react-router";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";

//todo deal with this later
//authenticated true

const Card = ({
  product,
  addtoCart = true,
  removeFromCard = false,
  reload = undefined,
  setReload = (f) => f,
  //function(f){return f}
}) => {
  // console.log(product.image);
  const cardTitle = product ? product.name : "A dummy";
  const cardDescription = product ? product.description : "Dummy";
  const cardPrice = product ? product.price : "A dummy";

  const [redirect, setRedirect] = useState(false);

  const addToCart = () => {
    if (isAuthenticated()) {
      addItemToCart(product, () => {
        setRedirect(true);
      });
      console.log("Added to cart");
    } else {
      console.log("Login Please");
    }
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart"></Redirect>;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success"
        >
          Add to cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCard) => {
    return (
      removeFromCard && (
        <button
          onClick={() => {
            //todo
            removeItemFromCart(product.id);
            setReload(!reload);
            console.log("product removed from cart");
          }}
          className="btn btn-block btn-outline-danger"
        >
          Remove From Cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        {getRedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {cardDescription}
        </p>

        <p className="btn btn-success rounded btn-sm px-4">{cardPrice}</p>
        <div classname="row">
          <div className="d-grid gap-2 mx-auto">
            {showAddToCart(addToCart)}
            {showRemoveFromCart(removeFromCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
