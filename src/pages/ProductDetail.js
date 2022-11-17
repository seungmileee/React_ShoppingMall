import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id, name } = useParams();

  return (
    <>
      <div>{id}</div>
      <div>{name}</div>
    </>
  );
}

export default ProductDetail;
