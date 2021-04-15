
import React,{useState,useHistory} from 'react'
import { useDispatch } from 'react-redux';
import {signupFarmer} from '../actions/auth';

function Signup() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setcPassword] = useState('');
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    // const history = useHistory();

  const  handleSubmit =  (e) =>{
   
    e.preventDefault();

        dispatch(signupFarmer(username,email,password,cpassword));

          
    }

    return (
        <div>
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
                            <label>password</label>
                            <input type="password" 
                            className="text-input"
                            value={cpassword}
                            onChange={(e)=> setcPassword(e.target.value)}
                            required
                            />
                        </div>
                        <button class="primary-btn">Sign In</button>
                    </form>
        </div>
    )
}

export default Signup
