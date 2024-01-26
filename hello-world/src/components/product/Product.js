import ListItem from "./list_items/ListItems";
import Loader from "../UI/Loader";
import { useState, useEffect } from "react";

const Product = () => {
    
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products/')
        .then(response => response.json())
        .then(json => {
            const products = json.products;
            const items = products.map(product => {
                return({
                    ...product,
                    quantity : 0
                })
            })
            setItems(items);
            setLoader(false);
        })
        
    },[]);  
                
    return (
        <>
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
        </>
    );
}

export default Product;