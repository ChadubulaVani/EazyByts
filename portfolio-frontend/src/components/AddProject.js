import React, { useState } from 'react';
import axios from 'axios';
import './AddProject.css';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [message, setMessage] = useState('');
  const [editingProject, setEditingProject] = useState(null);
const [formData, setFormData] = useState({
  title: '',
  description: '',
  technologies: [],
});


  const handleSubmit = async (e) => {
    e.preventDefault();

    const techArray = technologies.split(',').map(tech => tech.trim());

    try {
      const response = await axios.post('http://localhost:5000/api/projects', {
        title,
        description,
        technologies: techArray
      });

      setMessage(response.data.message);
      setTitle('');
      setDescription('');
      setTechnologies('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to add project');
    }
  };

  return (
    <div className='img4'>
    <div className="add-project-container">
      <h2>Add New Project</h2>
      {message && <p className="response-msg">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Technologies (comma separated)"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          required
        />
        <button type="submit">Add Project</button>
      </form>
    </div></div>
  );
};

export default AddProject;
