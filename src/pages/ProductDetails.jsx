import { useState, useEffect } from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { useCart } from "../contex/CartContext";


export function ProductDetails(){
    const {id} = useParams();
    const {addTtoCart} = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://fakestoreapi.com/products/${id}');

                if (!response.ok) {
                    throw new Error('Prduct Not Found');
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
    );
    if (!product) return(
        <p>No product found</p>
    )


    return(
        <div>
            <h1>Product Details</h1>
            <Link to="products">Back to Products</Link>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="150"/>
            <p>Price: {product.price}</p>
            <p>Category : {product.category}</p>
            <button 
            type="button"
            onClick={() => addToCart(product)}
            aria-label="Add to cart">
            </button>
        <nav className="mt-20 flex gap-10">
            <Link to="/product,id">Details</Link>
            <Link to="/product,id,specifications">Specification</Link>
            <Link to="/product,id,reviews">Reviews</Link>
        </nav>
        <div className="mt-20">
                <Routes>
                    <Route path="" element={<p>{product.description}</p>} />
                    <Route path="specifications" element={<p>Category: {product.category} | Rating: {product.rating?.rate} / 5</p>} />
                    <Route path="reviews" element={<p>Customer Reviews ({product.rating?.count} reviews)</p>} />
                </Routes>
            </div>

        </div>
    )
}
export default ProductDetails;