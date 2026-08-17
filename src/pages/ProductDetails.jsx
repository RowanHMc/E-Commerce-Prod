import { useState, useEffect } from "react";
import { useCallback } from "../contex/CartContext.jsx";

export function ProductDetails(){
    const {id} = useParams();
    const {adTtoCart} = useCart();

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

      useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://fakestoreapi.com/products');

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
            <a href="products">Back to Products</a>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="150"/>
            <p>Price: {product.price}</p>
            <p>Category : {product.category}</p>
            <button 
            type="button"
            onClick={() => addToCart(product)}
            aria-label="Add to cart">
            </button>
        <nav className="mt-20">
            <a href="product,id">Details</a>
            <a href="product,id,specifications">Specification</a>
            <a href="product,id,reviews">Reviews</a>
        </nav>

        </div>
    )
}
export default ProductDetails;