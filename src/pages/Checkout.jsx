import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { CheckCircle, Truck, ArrowLeft, ShieldCheck } from "lucide-react";



export function Checkout(){
    const {cart, totalPrice, clearCart} = useCart();
    const {user} = useAuth();

    const [address, setAddress] = useState('');
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col items-center shadow-2xl">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-4">
                        <CheckCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider mb-2">
                        Order Confirmed!
                    </h2>
                    <p className="text-xs text-zinc-400 mb-8 uppercase tracking-widest leading-relaxed">
                        Thank you for your purchase, <span className="text-emerald-400 font-bold">{user?.name || user?.email}</span>.
                    </p>
                    <Link
                        to="/products"
                        className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-emerald-950/40"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    };


    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                <div>
                    <h1 className="text-3xl font-extrabold text-white uppercase tracking-wider">
                        CHECKOUT
                    </h1>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
                        Logged in as: <span className="text-zinc-200">{user?.email}</span>
                    </p>
                </div>
                <Link
                    to="/cart"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Cart
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Input */}
                <div className="lg:col-span-2">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
                        <div className="flex items-center gap-3 pb-3 border-b border-zinc-800 text-white font-bold text-sm uppercase tracking-wider">
                            <Truck className="w-4 h-4 text-emerald-400" />
                            Shipping Information
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-xs text-red-400 font-semibold">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                                    Shipping Address
                                </label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="123 Main Street"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Nairobi"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 mt-4"
                            >
                                <ShieldCheck className="w-4 h-4" /> Order
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit space-y-6">
                    <h3 className="text-lg font-extrabold text-white uppercase tracking-wider pb-4 border-b border-zinc-800">
                        Order Details
                    </h3>

                    {/* Cart List */}
                    <ul className="space-y-3 max-h-60 overflow-y-auto pr-1">
                        {cart?.map((item) => (
                            <li key={item.id} className="flex justify-between items-center text-xs border-b border-zinc-800/50 pb-2">
                                <div className="truncate pr-2">
                                    <p className="font-semibold text-zinc-200 truncate">{item.title}</p>
                                    <p className="text-[10px] text-zinc-500">Qty: {item.quantity}</p>
                                </div>
                                <span className="font-bold text-white shrink-0">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 border-t border-zinc-800">
                        <div className="flex justify-between items-center text-base font-extrabold text-white">
                            <span>Total to pay:</span>
                            <span className="text-emerald-400">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;