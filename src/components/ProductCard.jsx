import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }) {
    return (
        <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col h-full">
            {/* Fixed height image container */}
            <div className="p-4 bg-slate-50 flex items-center justify-center h-48 w-full border-b border-slate-100">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-36 w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            
            <div className="p-4 flex flex-col grow">
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-full w-fit mb-2">
                    {product.category}
                </span>
                <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-3 min-h-[2.5rem] group-hover:text-indigo-600 transition-colors">
                    {product.title}
                </h3>
                
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-slate-100">
                    <span className="text-base font-bold text-slate-900">${product.price.toFixed(2)}</span>
                    <Link 
                        to={`/products/${product.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;