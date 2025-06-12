import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    
    <div className="dashboard-container">
      <h1>📊 CMS Dashboard</h1>
      <p className="welcome-msg">Welcome back! Here's an overview of your portfolio content.</p>

      <div className="dashboard-cards">
        <div className="card card-blue">
          <h2>📁 Projects</h2>
          <p>3 Projects</p>
        </div>

        <div className="card card-green">
          <h2>💡 Skills</h2>
          <p>5 Skills</p>
        </div>

        <div className="card card-orange">
          <h2>💬 Messages</h2>
          <p>2 Unread</p>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
    </div>
   
  );
};

export default Dashboard;
