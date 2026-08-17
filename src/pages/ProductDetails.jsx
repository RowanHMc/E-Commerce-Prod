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
        </div>
    )
}
export default ProductDetails;