import { createContext, useContext, useEffect, useState } from "react";
import { requestFormReset } from "react-dom";

const CartContext = createContext();
 export const CartProvider = ({children}) => {
    const [Cart, setCart] = useState([]);

   const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

    const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

    const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return(
        <CartContext.Provder value = {{cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice}}>
            {children}
        </CartContext.Provder>
    )
 };

 export const useCart = () =>useContext(CartContext);