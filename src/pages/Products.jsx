import { useEffect } from "react";


export function Products(){
    const[products, setProducts] = useState([]);
    const[Loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const[searchQuery, setSearchQuery] = useState('');
    const[selectedCategory, setSelectedCategory] = useSate('all');

    useEffect(() => {
        
    })

    return(
        <div>
            <h1>Products</h1>
        </div>
    )
}
export default Products;