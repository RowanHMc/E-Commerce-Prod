import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }) {
    return (
        <div className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 hover:shadow-xl transition-all duration-200 flex flex-col h-full">
            {/* White image canvas for contrast */}
            <div className="p-4 bg-zinc-100 flex items-center justify-center h-52 w-full border-b border-zinc-800">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-40 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-5 flex flex-col grow">
                <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded">
                        {product.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                        In Stock
                    </span>
                </div>

                <h3 className="text-sm font-semibold text-zinc-200 line-clamp-2 mb-4 min-h-10 group-hover:text-white transition-colors">
                    {product.title}
                </h3>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-zinc-800/80">
                    <span className="text-base font-extrabold text-white">${product.price.toFixed(2)}</span>
                    <Link 
                        to={`/products/${product.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;