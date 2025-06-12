import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/login');                
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/addproject">Add Project</Link></li>      
        <li><Link to="/contact">Contact</Link></li>  
        <li><Link to="/skills">Skills</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
