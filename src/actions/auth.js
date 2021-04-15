import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    CLEAR_AUTH_STATE,
    LOG_OUT,
    AUTHENTICATE_USER
} from "./actiontypes";


import { APIUrls } from '../helper/urls';
// import {getFormBody } from "../helper/utils";

export function startLoginFarmer() {
    return {
      type: LOGIN_START,
    };
  }

export function loginSuccessFarmer(user){
    return {
        type: LOGIN_SUCCESS,
        user
    }
}

export function loginFailedFarmer(error){
    return {
        type: LOGIN_FAILED,
        error
    }
}


export function  loginFarmer(username,password) {
    // console.log("the user us",userData);
    return async (dispatch,getState) => {
        dispatch(startLoginFarmer());
        const url = APIUrls.loginFarmer();
         const farmerInfo = APIUrls.getFarmer();
      
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())

        const farmer = await fetch(farmerInfo,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res)=> res.json())

        console.log("farmer",farmer);
        console.log("result is",result);

        if (result.status === 'ok' && farmer) {
            // everythign went fine
            console.log('Got the token: ', result.data)
            localStorage.setItem('token_farmer', result.data)
            dispatch(loginSuccessFarmer(farmer.data));
            localStorage.setItem('user',JSON.stringify(farmer.data));
            alert('Success')
           
        } else {
            alert(result.error)
            dispatch(loginFailedFarmer(result.error));
        }

      };
  }

  export function LogoutFarmer(){
      return {
          type:LOG_OUT
      }
  }

  export function Logout(){
      let url = APIUrls.FarmerLogout();
      return async (dispatch)=>{
        let result = await fetch(url,{
              method:'GET',
              headers: {
                'Content-Type': 'application/json'
            }
          }).then((res) => res.json()).catch((err)=>{console.log(err)});

        if(result.status=='ok'){
          localStorage.removeItem('user')
          localStorage.removeItem('token_farmer')
          dispatch(LogoutFarmer());
          alert(result.message)
          return;
        }
      }

      
  }


//   Signup

export function signupFarmerStart(){
    return {
        type:SIGNUP_START
    }
}
export function signupFarmerSuccess(user){
    return {
        type:SIGNUP_SUCCESS,
        user
    }
}
export function signupFarmerFailed(error){
    return {
        type:SIGNUP_FAILED,
        error
    }
}
export function signupFarmer(username,email,password,cpassword){
    const url = APIUrls.Farmersignup();
       
    return async (dispatch)=>{
        dispatch(signupFarmerStart());

        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email,
                cpassword
            })
        }).then((res) => res.json())
            console.log("signup user",result);
        if (result.status === 'ok') {
            
          dispatch(loginFarmer(result.farmer.username,result.farmer.cpassword));
          alert('success')
          return;
        } else {
            alert(result.error);
        }
    }
}

    