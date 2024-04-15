const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
    timestamps: false,
  }
);

module.exports = Task;
