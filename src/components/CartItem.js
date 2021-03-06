import React from "react";
import  { useCartContext } from "../components/CartContext";

const CartItem = ({ id, title, price, quantity, key }) => {
  const { deleteItem } = useCartContext();
  const borrar = () => {
    deleteItem(id);
  };

  return (
    <div className="">
      <label className="d-flex list-group-item">
        <div className="px-1 w-25">
          <span>Producto: {title}</span>
        </div>
        <div className="px-1 w-25">
          <span>Cantidad: {quantity}</span>
        </div>
        <div className="px-1 w-25">
          <span>Precio: {price}</span>
        </div>
        <div className="px-1 w-25">
          <span>Precio Final: {price * quantity}</span>
        </div>
        <button
          className="btn-close"
          type="button"
          onClick={borrar}
        ></button>
      </label>

    </div>
  );
};

export default CartItem;