import React from "react";
import imageHelper from "./helper/imageHelper";

function Card() {
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">Pexels Photo</div>
      <div className="card-body">
        <div className="rounder border border-success p-2">
          <img
            src="https://i.ibb.co/MNVTmgG/123959104-3524033740999554-532484397526415102-n.jpg"
            alt="123959104-3524033740999554-532484397526415102-n"
            border="0"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
            alt=""
          />
        </div>
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
