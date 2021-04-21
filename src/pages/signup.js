
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {signupFarmer} from '../actions/auth';
import { useHistory } from "react-router-dom";
import '../css/login.css';

function Signup() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setcPassword] = useState('');
    const [email,setEmail] = useState('');
    const [signIn,setSignIn] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

  const  handleSubmit =  (e) =>{
   
    e.preventDefault();

        dispatch(signupFarmer(username,email,password,cpassword));

          setSignIn(true);
    }

    useEffect(() => {
        console.log('signIn',signIn);
        
            if(signIn){
                history.push('/login');
            }else{
                history.push('/sign-up');
            }
        
    },[signIn])

    return (
        <div className="wrapper">
            <div className="left">
                <div className="signin">
                    <div className="logo">
                        <img src="" />
                    </div>
                   
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label> username</label>
                            <input 
                            type="text" 
                            className="text-input"
                            value={username}
                            onChange={(e)=> setUsername(e.target.value)}
                            required
                            />
                        </div>
                        <div>
                            <label> Email</label>
                            <input 
                            type="email" 
                            className="text-input"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
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
                        <div>
                            <label>confirm password</label>
                            <input type="password" 
                            className="text-input"
                            value={cpassword}
                            onChange={(e)=> setcPassword(e.target.value)}
                            required
                            />
                        </div>
                        <button class="primary-btn">Sign Up</button>
                    </form>
                   
                    <div className="links">
                    <a href="#">Sign in with company or school</a>
                 </div> 
                
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

export default Signup
