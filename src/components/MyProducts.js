import {React,useState,useEffect} from 'react'


import Table from 'react-bootstrap/Table'
import {connect, useSelector} from 'react-redux';
function MyProducts() {

    const products = useSelector(state => state.product);

    return (
        <div>

           
         { products.products?.map((product,index) => (
            
            <>
            <p>{index+1}</p>
            {/* <td></td> */}
            <p>{product?.title}</p>
            <p>{product?.description}</p>
            <p>{product?.Qty}</p>
            <p>{product?.price}</p>
            
            </>
              
          ))} 
         
        </div>
    )
}

// function mapStateToProps(state) {
//     console.log("sttate in myproduct",state.product);
//     return {
//         products : state.product
//     };
//   }
  
  export default MyProducts;
//   export default connect(mapStateToProps)(MyProducts);
