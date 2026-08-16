import { useEffect } from "react";


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

    

    return(
        <div>
            <h1>Products</h1>
        </div>
    )
}
export default Products;