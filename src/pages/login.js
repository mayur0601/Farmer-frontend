import React, {  useState ,useEffect} from "react";
// import { useState } from 'react';
import { loginFarmer } from '../actions/auth';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../css/login.css';

function Login({farmer}) {

    const history = useHistory();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

 const dispatch = useDispatch();

   const  handleSubmit = (e) =>{
        e.preventDefault();
        if (username && password) {
          
          dispatch(loginFarmer(username,password));
            console.log("fff",farmer);
          
        }
       
    };
    
    useEffect(() => {
        console.log('effectis',farmer);
        
            if(farmer){
                history.push('/');
            }else{
                history.push('/login');
            }
        
    },[farmer])

    
    return (
        <div className="wrapper">
            <div className="left">
                <div className="signin">
                    <div className="logo">
                        <img src="" />
                    </div>
                    <form
                    onSubmit={handleSubmit}
                    >
                        <div>
                            <label>Email or username</label>
                            <input 
                            type="text" 
                            className="text-input"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <label>password</label>
                            <input type="password" 
                            className="text-input"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            required
                            />
                        </div>
                        <button class="primary-btn">Login</button>
                    </form>
                    <div className="links">
                    <a href="#">Forgot Password</a>
                    <a href="#">Sign in with company or school</a>
                 </div>
                 <div className="or">
                   
                   <hr className="bar"/>
                   <span>OR</span>
                   <hr className="bar"/>
                 </div> 
                 <a href="#" className="secondary-btn">create an account</a>
                </div>
            <footer className="main-footer">
                   <p>copyright &copy; 2021, Sluralpright All right reserved</p>
                   <div>
                       <a href="#">terms of use</a> | <a href="#">Privacy Policy</a>
                   </div> 
            </footer>
            </div>
            <div className="right">


            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("sttate is",state.auth.isLoggedin);
    return {
        farmer : state.auth.isLoggedin
    };
  }
  export default connect(mapStateToProps,{loginFarmer})(Login);
  
