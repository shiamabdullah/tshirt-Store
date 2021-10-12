import React from "react";
import ImageHelper from "./helper/ImageHelper";

function Card({ product, addtoCart = true, removeFromCard = false }) {
  console.log(product.image);
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">Pexels Photo</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          Photo is awesome
        </p>

        <p className="btn btn-success rounded btn-sm px-4">$ 5</p>
        <div className="row">
          <div className="col-12"></div>
          <button
            onClick={() => {}}
            className="btn btn-block btn-outline-success mt-2 mb-2"
          >
            Add to cart
          </button>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
