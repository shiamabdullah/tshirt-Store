import React from "react";

const ImageHelper = ({ product }) => {
  const imageUrl = product
    ? product.image
    : `https://i.ibb.co/g6hF70Z/Screenshot-1252.png"`;
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

export default ImageHelper;
