const express = require('express');
const router = express.Router();
const {
  addProject,
  getAllProjects,
  deleteProject,
  updateProject
} = require('../controllers/projectController');

router.post('/', addProject);
router.get('/', getAllProjects);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

module.exports = router;
