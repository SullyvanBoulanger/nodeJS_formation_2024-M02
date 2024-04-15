const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  date_debut: Date,
  date_fin: Date,
  done: {
    type: Boolean,
    defaultValue: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
