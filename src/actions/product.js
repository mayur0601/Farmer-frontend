
import { 
    ADD_PRODUCT
} from "./actiontypes";
import {APIUrls} from "../helper/urls";
import axios from "axios";

export function addProductSuccess(myProduct){
    return {
        type:ADD_PRODUCT,
        myProduct
    }
}
export function addProduct(formData){

    return async (dispatch)=>{
        const farmerInfo = APIUrls.getFarmer();
     
        let result = await axios.post(APIUrls.addProduct(),formData);
            
        const farmer = await fetch(farmerInfo,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=> res.json())

            console.log("signup user",result);
            
        if (result.data.message === 'ok') {
           
            farmer.farmer.myProducts.push(result.data.data);
            let newmyProduct =  farmer.farmer.myProducts;
            console.log("farmer in product is",newmyProduct);
            console.log("prrrrrrr",newmyProduct);
            localStorage.setItem("farmer_products", JSON.stringify(newmyProduct));
            addProductSuccess(newmyProduct);
          alert('success');
          return;
        } else {
            alert(result.error);
        }
    }
}