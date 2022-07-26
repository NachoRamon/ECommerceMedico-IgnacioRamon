import React from 'react'
import CartItem from './CartItem';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from './CartContext';


function Cart() {

  const { cart, clearAll, totalItems, totalPrice } = useContext(CartContext)

  return (

    <section>
      {cart.length > 0 &&
        <div>
          <div>ITEMS IN CART: {totalItems}</div>
          <div></div>
          <div>TOTAL ${totalPrice}</div>
        </div>}
      <div>
        {cart.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            id={item.id}
            key={item.id}
          />))}
      </div>

      <div>
        {cart.length > 0 ? <button onClick={clearAll}>CLEAR ALL</button>
          :
          <Link to="../">
            <h1>EMPTY CART</h1><button onClick={clearAll}>COMPRAR PRODUCTOS</button></Link>}
      </div>
    </section>

  )
}

export default Cart;