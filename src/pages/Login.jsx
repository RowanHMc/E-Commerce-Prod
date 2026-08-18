import { useState } from "react";
import { useAuth } from "../contex/AuthContext";



export function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');

    const {login} = useAuth();
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email.trim() || !password.trim()){
            setError('Input field empty');
            return;
        }
        setError('');
        login({email});

    };
    return( 
        <div>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email"
                    value ={email}
                    onChange = {(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"
                    value ={password}
                    onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Log In</button>
                
            </form>
        </div>
    )
};

export default Login;