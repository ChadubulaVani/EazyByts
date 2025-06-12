import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            alert('Login successful 👍');
            localStorage.setItem('token', res.data.token);
            navigate("/");
            
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            alert('Login failed 👎 ' + errorMsg);
        }
    };

    return (
        <div className="img2">
        <div className="login-container">
        <form onSubmit={handleLogin} className="f1">
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Enter your Email address"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
            /><br/>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
            /><br/>
            <button type="submit" >Click to Login</button>
        </form></div></div>
    );
}

export default Login;
