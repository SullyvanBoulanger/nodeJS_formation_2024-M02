const Task = require("../model/task");
const stringToDate = require("../utils/date");

const findTaskById = async (req, res, next) => {
  req.task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (req.task === null) {
    return res.status(404).json({ message: "Task not found" });
  }
  next();
};

const getAll = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

const postTask = async (req, res) => {
  const taskToAdd = {
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ?? false,
  };

  taskToAdd.date_debut = stringToDate(req.body.date_debut);
  taskToAdd.date_fin = stringToDate(req.body.date_fin);

  const addedTask = await Task.create(taskToAdd);
  res.json(addedTask);
};

const getTaskById = (req, res) => {
  res.json(req.task);
};

const deleteTaskById = (req, res) => {
  req.task.destroy();
  res.status(204).end();
};

const updateTaskById = (req, res) => {
  Object.assign(req.task, req.body);
  req.task.update({
    title: req.body.title ?? req.task.title,
    description: req.body.description ?? req.task.description,
    date_debut: req.body.date_debut
      ? stringToDate(req.body.date_debut)
      : req.task.date_debut,
    date_fin: req.body.date_fin
      ? stringToDate(req.body.date_fin)
      : req.task.date_fin,
    done: req.body.done ?? req.task.done,
  });
  res.json(req.task);
};

module.exports = {
  findTaskById,
  getAll,
  postTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
};
