import { useState } from "react";
import { useCart } from "../contex/CartContext";
import { useAuth } from "../contex/AuthContext";

export function Checkout(){
    const {cart, totalPrice, claerCart} = useCart();
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
        claerCart();
    };
    if(submitted){
        return(
            <div>
                <h2>Order Confirmed!</h2>
                <p>Thank you for your purchase, {user?.email}.</p>
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
            </ul>
            <h4>Total to pay: ${totalPrice}</h4>
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
            </form>
            < button type="submit">Place Order</button>
        </div>
    )
}
export default Checkout;