import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
 export const CartProvider = ({children}) => {
    const [Cart, SetCart] = useState(() => {
        
    });
    useEffect(()=> {

    })

    return(
        <CartContext.Provder value = {{}}>
            {children}
        </CartContext.Provder>
    )
 };
 
 export const useCart = () =>useContext(CartContext);