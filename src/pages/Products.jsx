import {useState, useEffect } from "react";


export function Products(){
    const[products, setProducts] = useState([]);
    const[Loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const[searchQuery, setSearchQuery] = useState('');
    const[selectedCategory, setSelectedCategory] = useSate('all');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://fakestoreapi.com/products');

                if (!response.ok) {
                    throw new Error('Loading Failed');
                }
            const data = await response.json();
            setProducts(data);    
            }catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    };

    fetchProducts();
    },[]);
    
    if (loading) return (
        <p>Loading Products</p>
    );
    if (error) return (
        <p>Error: {error}</p>
    )

    const categories = ['all', ...new Set(products.map((p) => p.category))];
    const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title .toLowerCase() .includes(searchQuery.toLowerCase());      
    const matchesCategory =selectedCategory === 'all' || product.category === selectedCategory;   
    return matchesSearch && matchesCategory;
  });
 


return (
    <div>
      <h2>Products</h2>

      {/* search  */}
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
{/* filter */}
      <div>
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}
            >
              <img src={product.image} alt={product.title} width="100" />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>Category: {product.category}</p>
              <Link to={`/products/${product.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  )};
export default Products;