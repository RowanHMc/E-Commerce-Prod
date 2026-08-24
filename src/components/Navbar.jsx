import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-white uppercase hover:text-emerald-400 transition-colors"
        >
          SHOP
        </Link>

        {/* Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-400"
                : "hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-400"
                : "hover:text-white transition-colors"
            }
          >
            Shop
          </NavLink>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-xs font-semibold uppercase hover:text-emerald-400 transition-colors"
          >
            <ShoppingCart className="w-4 h-4 text-emerald-400" />
            <span>
              {totalItems} items - ${totalPrice.toFixed(2)}
            </span>
          </Link>

          {isLoggedIn ? (
            <div className="flex items-center gap-4 pl-4 border-l border-zinc-800">
              <span className="text-xs text-zinc-400">
                Hi,{" "}
                <strong className="text-white">
                  {user?.name || user?.email}
                </strong>
              </span>
              <button
                onClick={logout}
                className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-xs font-semibold uppercase">
              <Link to="/login" className="hover:text-white transition-colors">
                Login
              </Link>
              <span className="text-zinc-700">|</span>
              <Link to="/register" className="text-emerald-400 hover:underline">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
