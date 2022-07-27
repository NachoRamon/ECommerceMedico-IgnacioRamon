import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (itemId) => {
        const exist = cart.find(el => el.id === itemId)
        return exist
    }
    const addItem = ({id, title, price, quantity}) => {
        const exist = isInCart(id)
        if (!exist) {
            const _cart = cart.concat({id, title, price, quantity})
            setCart(_cart);
        } else {
            const index = cart.findIndex(x => x.id === id)
            const cart_ = cart.slice()
            cart_[index].quantity = cart_[index].quantity+ quantity
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

        const totalItems = () =>{
            if (cart.length===1) {
                return cart[0].quantity
            }{
                const _items = cart.map((cart) => cart.quantity).reduce((a,b) => (a+b))
                return _items
            }
        }
        return (
            <CartContext.Provider 
            value={{cart,
                addItem,
                isInCart,
                deleteItem,
                clearAll,
                totalItems,

            }}
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