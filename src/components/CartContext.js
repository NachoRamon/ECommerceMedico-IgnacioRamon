import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        const exist = cart.find(el => el.id === itemId)
        return exist
    }
    const addItem = (item) => {
        const exist = isInCart(item.id)
        if (!exist) {
            setCart([...cart, item])
        } else {
            const index = cart.findIndex(x => x.id === item.id)
            const cart_ = cart.slice()
            cart_[index].quantity = cart_[index].quantity+ item.quantity
            setCart(cart_)
        }
        }


        const deleteItem = (id) => {
            const _items = cart.filter(el => el.id !== id);
            setCart(_items);
        };

        const clearAll = () => {
            setCart([])
        }

        return (
            <CartContext.Provider 
            value={(cart,
                addItem,
                isInCart,
                deleteItem,
                clearAll)}
                >
                {children}
            </CartContext.Provider>
        )
    }

    export const useCartContext = () => {
        const CartContextProvider = useContext(CartContext);
        return CartContextProvider
    };
    export default CartContext;