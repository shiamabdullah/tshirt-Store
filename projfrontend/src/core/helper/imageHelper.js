import React from "react";

const imageHelper = ({ product }) => {
  const imageUrl = product
    ? product.image
    : `<img src="https://i.ibb.co/g6hF70Z/Screenshot-1252.png" alt="Screenshot-1252" border="0" />`;
  return (
    <div className="rounder border border-success p-2">
      <img
        src={imageUrl}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default imageHelper;
