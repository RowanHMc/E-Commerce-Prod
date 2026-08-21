import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, CreditCard } from "lucide-react";

export function Home() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)]">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 mb-6">
            <ShoppingBag className="w-3.5 h-3.5" /> Welcome to ShopHub
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Discover Quality Products for Your Everyday Life
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Browse our curated selection of electronics, jewelry, men's & women's apparel with fast shipping and secure checkout.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200"
          >
            Shop All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-slate-200 pt-12">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Fast Shipping</h3>
              <p className="text-xs text-slate-500">Delivered right to your doorstep</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Quality Guarantee</h3>
              <p className="text-xs text-slate-500">Verified products & reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Secure Checkout</h3>
              <p className="text-xs text-slate-500">Encrypted payment system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
