import React, {  useState ,useEffect} from "react";
// import { useState } from 'react';
import { loginFarmer } from '../actions/auth';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Login({farmer}) {

    const history = useHistory();

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

 const dispatch = useDispatch();

   const  handleSubmit = (e) =>{
        e.preventDefault();
        if (username && password) {
            console.log("true or false1",farmer.isLoggedin);
          dispatch(loginFarmer(username,password));
          
        }
       
    };

    
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
                        <button class="primary-btn">Sign In</button>
                    </form>
                </div>
            </div>
            <div className="right">


            </div>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("sttate is",state.auth);
    return {
        farmer : state.auth
    };
  }
  export default connect(mapStateToProps,{loginFarmer})(Login);
  
