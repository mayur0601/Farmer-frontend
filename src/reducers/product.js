
import { 
    ADD_PRODUCT
} from "../actions/actiontypes";

import {APIUrls} from "../helper/urls";


const initialAuthState ={
    products :localStorage.getItem('farmer_products')? JSON.parse(localStorage.getItem('farmer_products')) : []

} 

// switch (action.type) {
//     case LOGIN_START:
//       return {
//         ...state,
//         inProgress: true,
//       };
export default function product(state = initialAuthState, action) {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products:action.myProduct 
        };
     
      default:
        return state;
    }
  }
  