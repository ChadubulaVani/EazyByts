const Project = require('../models/projectModel');

const addProject = async (req, res) => {
  try {
    const { title, description, technologies } = req.body;

    if (!title || !description || !technologies || technologies.length === 0) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProject = new Project({
      title,
      description,
      technologies,
    });

    await newProject.save();

    res.status(201).json({ message: 'Project added successfully', project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add project' });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
};

// DELETE a project by ID
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project" });
  }
};

// UPDATE a project by ID
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, technologies } = req.body;
    const updated = await Project.findByIdAndUpdate(
      id,
      { title, description, technologies },
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project updated successfully", project: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update project" });
  }
};


module.exports = {
  addProject,
  getAllProjects,
  deleteProject,
  updateProject
};
