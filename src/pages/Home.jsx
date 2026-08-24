import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, ShieldCheck, Truck, CreditCard } from "lucide-react";

export function Home() {
  return (
    <div className="bg-zinc-950 min-h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
             
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                        <ShoppingBag className="w-3.5 h-3.5" /> Welcome to ShopHub
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-tight mb-6">
                        Discover Quality Products for Your Everyday Life
                    </h1>
                    <p className="text-xs sm:text-sm text-zinc-400 uppercase tracking-widest mb-8 leading-relaxed">
                        Browse our curated selection of electronics, jewelry, men's & women's apparel with fast shipping and secure checkout.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-lg shadow-emerald-950/40 transition-all duration-200"
                    >
                        Shop All Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-zinc-800/80 pt-12">
             
                    <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                            <Truck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Fast Shipping</h3>
                            <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5">Delivered right to your doorstep</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Quality Guarantee</h3>
                            <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5">Verified products & reviews</p>
                        </div>
                    </div>

                    
                    <div className="flex items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl">
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                            <CreditCard className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Secure Checkout</h3>
                            <p className="text-[11px] text-zinc-400 uppercase tracking-widest mt-0.5">Secure payment system</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Home;
