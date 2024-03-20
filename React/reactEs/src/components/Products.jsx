const Products = () => {

    const API_URL ="https://dummyjson.com/products";

    const fetchData = async () => {
        try {
            const response = await fetch(API_URL, { method: "GET" });
            const result = await response.json();
    
            if (response.ok) {
                state._data = result;
            } else {
                throw new Error(result);
            }
        } catch (error) {
            console.log(error);
        }
    };
    
fetchData();
    return(
        <>
            <pre>{JSON.stringify( null, 2)}</pre>
        </>
    )
}

export default Products;