export function SearchBar({ searchQuery, setSearchQuery, selectedCategory, setselectedCategory, categories }) {
    return(
        <div>
            <input
            type='text'
            placeholder="search product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>

            <select value={selectedCategory} 
            onChange={(e) => setselectedCategory(e.target.value)}>

                {categories.map((cat) => (
                    <option key = {cat} value={cat}>
                        {cat.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
};
export default SearchBar;