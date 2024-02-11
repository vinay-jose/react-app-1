import ListItem from "./list_items/ListItems";
import Loader from "../UI/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../utils/NotFound";

const Product = () => {
    
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const params = useParams();
    // const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products/')
        .then(response => response.json())
        .then(json => {
            let products = json.products;
            if (params.category) {
                products = products.filter(product => params.category === product.category);
                console.log(products);
            }
            setItems(products);
            setLoader(false);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        return () => {
            setItems([]);
            setLoader(true);
        }
        
    },[params.category]);  
                
    return (
        <>
        {
            items.length?
                <div className={"product-list"}>
                    <div className="product-list--wrapper"> 
                        {
                        items.map(item => (<ListItem 
                                                key = {item.id} 
                                                data = {item}>
                                            </ListItem>))
                        }       
                    </div>
                { loader && <Loader/>}
                </div>
                :
                <NotFound/>
        }
        </>
    );
}

export default Product;