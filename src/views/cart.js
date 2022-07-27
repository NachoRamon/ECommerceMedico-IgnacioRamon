import React from 'react'
import CartItem from '../components/CartItem';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext, { useCartContext } from '../components/CartContext';


function Cart() {

  const { clearAll } = useCartContext();

  return (
    <CartContext.Consumer>
      {({ cart }) => (
        <div>
          {cart.length ? (
            cart.map((item) => (
              <CartItem
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity} 
                key={item.id}
              />))
          ): (
            <p>No hay producto agregados</p>
          )}
        <button className="btn-warning" onClick={clearAll}>Borrar todo</button>
        </div>
      )}
        
    </CartContext.Consumer>
  )
}

export default Cart;