import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Search, Filter } from "lucide-react";

export function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to load products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-md mx-auto my-12 p-4 text-red-700 bg-red-50 border border-red-200 rounded-lg text-center">
        Error: {error}
      </div>
    );

  const categories = ["all", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header & Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-800">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wider uppercase mb-1">
            SHOP CATALOG
          </h1>
          <p className="text-xs text-zinc-400 uppercase tracking-widest">
            Showing {filteredProducts.length} results
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* search  */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search catalog..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-100 rounded focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-zinc-600"
            />
          </div>

          <div className="relative w-full sm:w-52">
            <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-100 rounded focus:outline-none focus:border-emerald-500 capitalize transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900 rounded-xl border border-dashed border-zinc-800">
          <p className="text-zinc-400 text-sm uppercase tracking-wider">
            No products match your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
