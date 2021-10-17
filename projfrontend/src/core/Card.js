import React, { useState } from "react";
import { Redirect } from "react-router";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";

//todo deal with this later
//authenticated true

const Card = ({ product, addtoCart = true, removeFromCard = true }) => {
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
      addToCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
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
            console.log("product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
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

        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCard)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
