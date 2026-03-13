const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { validateTask, validateTaskUpdate } = require('../middleware/validation');

// All task routes are protected
router.use(protect);

router.route('/')
  .post(validateTask, createTask)
  .get(getTasks);

router.route('/:id')
  .put(validateTaskUpdate, updateTask)
  .delete(deleteTask);

module.exports = router;