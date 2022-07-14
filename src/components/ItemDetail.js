import React from "react";

const ItemDetailContainer = ({ imagen, descr, price }) => {
  return (
    <div>
      <img className="w-25" src={imagen}></img>
      <p>{descr}</p>
      <p>${price}</p>
    </div>
  );
};

export default ItemDetailContainer;