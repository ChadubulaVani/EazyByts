import { useState } from 'react';
import axios from 'axios';
import './Register.css';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      alert('Registration successful!');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
  console.error(err);
  const errorMsg =
    err.response?.data?.message || err.response?.data?.msg || 'Something went wrong';
  alert('Registration failed: ' + errorMsg);
}

  };

  return (
    <div className='img1'>
    <div className='register-container'>
    <form onSubmit={handleRegister} style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ display: 'block', marginBottom: 10, width: '100%', padding: 8 }}
      />
      <button type="submit" style={{ padding: 10, width: '100%' }}>Register</button>
    </form></div></div>
  );
}
