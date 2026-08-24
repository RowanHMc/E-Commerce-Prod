import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";


export function Checkout(){
    const {cart, totalPrice, clearCart} = useCart();
    const {user} = useAuth();

    const [address, setAddress] = useState();
    const [ city, setCity] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!address.trim() || !city.trim()) {
            setError('All Fields are required');
            return;
        }
        setError('');
        setSubmitted(true);
        clearCart();
    };
    if(submitted){
        return(
            <div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase, {user?.name}.</p>
            </div>
        );
    };


    return(
        <div>
            <h1>Checkout</h1>
            <p>Logged in as: {user?.email}</p>
            <h3>Order Summary</h3>
            <ul>
                {cart.map}
                <li key={item.id}>{item.title} x {item.quantity} - ${item.price * item.quantity}</li>
            </ul>
            <h4>Total to pay: ${totalPrice.toFixed(2)}</h4>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                 <div>
                    <label>Shipping Address:</label>
                    <input type="text"
                    value ={address}
                    onChange = {(e) => setAddress(e.target.value)}/>
                </div>
                 <div>
                    <label>City:</label>
                    <input type="text"
                    value ={city}
                    onChange = {(e) => setCity(e.target.value)}/>
                </div>
                < button type="submit">Place Order</button>
            </form>
            
        </div>
    )
}
export default Checkout;