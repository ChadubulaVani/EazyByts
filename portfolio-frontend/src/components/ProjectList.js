import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
  });

  const startEdit = (project) => {
    setEditingProject(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
    });
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Failed to load projects", error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`http://localhost:5000/api/projects/${id}`);
        alert("Project deleted successfully");
        fetchProjects(); 
      } catch (error) {
        alert("Failed to delete project");
        console.error(error);
      }
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/projects/${editingProject}`, {
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies
          .split(",")
          .map((tech) => tech.trim()),
      });
      alert("Project updated successfully");
      setEditingProject(null);
      setFormData({ title: "", description: "", technologies: "" });
      fetchProjects();
    } catch (error) {
      alert("Failed to update project");
      console.error(error);
    }
  };

  return (
    <div className="img3">
    <div className="project-list-container">
      <h2 style={{color:"white"}}>My Projects</h2><br/>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>

            <button onClick={() => handleDelete(project._id)} className="edit-btn">Delete</button><br/>
            <button onClick={() => startEdit(project)} className="edit-btn">
              Edit
            </button>
          </div>
        ))}
      </div>
      {editingProject && (
        
  <div className="edit-form">
    <h2>Edit Project</h2><br/>
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Technologies (comma separated)"
        value={formData.technologies}
        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
        required
      />
      <button type="submit" style={{color:"black"}}><b>Update Project</b></button>
      <button type="button" onClick={() => setEditingProject(null)}>Cancel</button>
    </form>
  </div>
)}

    </div></div>
  );
};

export default ProjectList;
