import React from "react";
import { Redirect } from "react-router";
import ImageHelper from "./helper/ImageHelper";
//todo deal with this later
//authenticated true
const isAuthenticated = false;

const Card = ({ product, addtoCart = true, removeFromCard = true }) => {
  console.log(product.image);
  const cardTitle = product ? product.name : "A dummy";
  const cardDescription = product ? product.description : "Dummy";
  const cardPrice = product ? product.price : "A dummy";

  const addToCart = () => {
    isAuthenticated
      ? console.log("Added to cart")
      : console.log("Please login");
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
