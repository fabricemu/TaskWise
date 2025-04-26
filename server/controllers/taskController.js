const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const { userId, title, description, status } = req.body;

  try {
    const newTask = await Task.create({ userId, title, description, status });
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const userId = req.params.userId; // Ensure userId is extracted from params
    const tasks = await Task.findAll({ where: { userId } }); // Query tasks for the given userId
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const updatedTask = await Task.update(
      { title, description, status },
      { where: { id: req.params.id }, returning: true }
    );
    res.json(updatedTask[1][0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
