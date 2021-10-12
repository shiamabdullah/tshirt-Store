import React from "react";
import ImageHelper from "./helper/ImageHelper";

function Card({ product, addtoCart = true, removeFromCard = false }) {
  console.log(product.image);
  const cardTitle = product ? product.name : "A dummy";
  const cardDescription = product ? product.description : "Dummy";
  const cardPrice = product ? product.price : "A dummy";
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
          <div className="col-12"></div>
          <button
            onClick={() => {}}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to cart
          </button>

          <button
            onClick={() => {}}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove From Cart
          </button>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
