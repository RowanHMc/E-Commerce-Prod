import { useCart } from "../contex/CartContext";
import { Link } from "react-router-dom";

export function Cart(){
   const {cart, removeFromCart, updateQuantity, totalPrice,clearCart} = useCart ();

   if (cart.length === 0) {
    return(
        <>
        <h2>Your Cart</h2>
        <p>Your cart is Empty</p>
        <Link to ="/products">Start Shopping</Link>
        </>
    );
   }
      
    return(
        <div>
            <h2>My Cart</h2>
            {cart.map((item) => (
                <div>
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity:{''}
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1 )}>-</button>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1 )}>+</button>
                    </p>
                    <p>Subtotal: ${(item.price * item.quantity)}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))};
        <h3>Total: ${totalPrice}</h3>
        <button onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout"><button>Checkout</button>
        </Link>
        </div>
    )
};

export default Cart;