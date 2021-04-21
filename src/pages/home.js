import React from 'react'

import ProductModal from "../components/ProductModal";
import MyProducts from "../components/MyProducts";
function home() {
    return (
        <div className="home">
           <h2>HOme</h2> 
           <ProductModal/>
           <h1>MY PRODUCTS</h1>
           <MyProducts/>
           <h2>Orders</h2>
        </div>
    )
}

export default home
