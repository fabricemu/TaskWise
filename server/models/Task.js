const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Task = sequelize.define('Task', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

module.exports = Task;
