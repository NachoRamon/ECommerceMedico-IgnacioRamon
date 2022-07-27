import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext, { CartContextProvider } from "./CartContext";

const CartWidget = () => {

  const { clearAll, totalItems } = useContext(CartContext)

  return (
    <CartContext.Consumer>
      {({cart})=>(
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex="0">
            <div>
              <p>
                Items:
                {cart.length ? (totalItems()) : 0}
              </p>
              <div>
                <Link to="/cart">
                  <button className="btn btn-outline-success ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  </button>
                </Link>
                <button onClick={clearAll}>Clear Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </CartContext.Consumer>
  )
}

export default CartWidget;