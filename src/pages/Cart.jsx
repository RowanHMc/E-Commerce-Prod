import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 mb-4">
            <ShoppingBag className="w-8 h-8 text-zinc-600" />
          </div>
          <h2 className="text-xl font-extrabold text-white uppercase tracking-wider mb-2">
            Your Cart Is Empty
          </h2>
          
          <Link
            to="/products"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded transition-all shadow-lg shadow-emerald-950/40"
          >
            Explore Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
{/* head  */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
        <div>
          <h1 className="text-3xl font-extrabold text-white uppercase tracking-wider">
            SHOPPING CART
          </h1>
          <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">
            {cartItems.length} unique item{cartItems.length > 1 ? "s" : ""} in cart
          </p>
        </div>

        <button
          onClick={clearCart}
          className="text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
        > Clear Cart</button>               
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* cart lists  */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 hover:border-zinc-700 transition-all">            
              {/* images  */}
              <div className="w-24 h-24 bg-zinc-100 rounded-lg p-2 flex items-center justify-center shrink-0 border border-zinc-800">
                <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain"/>                                                  
              </div>

              <div className="grow text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-sm font-semibold text-zinc-100 line-clamp-1 mt-2">
                  {item.title}
                </h3>
                <div className="text-sm font-bold text-white mt-1">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-white">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right min-w-8">
                  <span className="text-sm font-extrabold text-white">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                  title="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white pt-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Continue Shopping
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit space-y-6">
          <h2 className="text-lg font-extrabold text-white uppercase tracking-wider pb-4 border-b border-zinc-800">
            Order Summary
          </h2>

          <div className="flex justify-between items-center text-base font-extrabold text-white">
            <span>Total Due</span>
            <span className="text-emerald-400">${totalPrice.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="block w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest text-center rounded transition-all shadow-lg shadow-emerald-950/40"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
