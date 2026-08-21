import { Link } from "react-router-dom";
import { useAuth } from "../contex/AuthContext";
import { useCart } from "../contex/CartContext";
 add

export function Navbar () {
    const {isLoggedIn, user, logout} = useAuth();
    const {totalItems} = useCart();

    return(
        <header className="sticky top-0 z-50 bg-white/80 items-center justify-between backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Products</Link>
            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">Cart ({totalItems})</Link>

            {isLoggedIn ? (
                <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-1"> Hello, {user.name}</span>
                <button onClick={logout} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Log Out</button>
                </div>
            ): (
                <Link to= "/login" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors">Login</Link>
            )}

        </div>
        </header>
    )
};

export default Navbar;