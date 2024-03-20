import { useEffect, useState } from "react";
import { Constants } from "../../constants";

const Home_page = () => {
    const[products, setProducts]= useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(Constants('/products').API_BASE);
                const result = await response.json();
                setProducts(result.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    return (

        
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>description</th>
                        <th>brand</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        products.length > 0 && products.map(product =>(
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <link to={`/products/${product.id}`}>info</link>
                                </td>
                            </tr>

                        ))

                }
                </tbody>
            </table>
        </>

    )
}

export default Home_page;