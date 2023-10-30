import React, { useEffect, useState } from "react";

import data from "./data.json";

export const PopularProducts = () => {
    const [popularProductsData, setPopularProdactsData] = useState(data);

    useEffect(() =>{
        fetch("https://dummyjson.com/products?limit=0&select=rating")
        .then((res) => res.json())
        .then(console.log);
    },[])

    return (
        <div className="bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 w-[20rem]">
            <strong>Popular Products</strong>
        </div>
    );
};
