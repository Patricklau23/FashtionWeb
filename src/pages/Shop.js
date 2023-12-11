import React, { useEffect,useState } from "react";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    //Set the api data as the state, now if I can pass it as property in Products component
    const [products,setProducts] = useState([])
    const data = useLoaderData();
    useEffect(()=>{
        setProducts(data.data);
    },[data.data]);

    return ( 
    <div>
        <Products products={products}/>
    </div>
    );
}

export default Shop;
