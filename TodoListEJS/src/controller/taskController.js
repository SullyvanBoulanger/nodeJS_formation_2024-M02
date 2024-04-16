const Task = require("../schema/task");
const { stringToDate, dateToString } = require("../utils/date");

const findTaskById = async (req, res, next) => {
  req.task = await Task.findById(req.params.id);
  if (req.task === null) {
    return res.status(404).json({ message: "Task not found" });
  }
  next();
};

const getAll = async (req, res) => {
  const tasks = await Task.find();
  res.render("pages/tasks/index", { tasks: tasks });
};

const renderCreate = (req, res) => {
  console.log("first");
  res.render("pages/tasks/create");
};

const renderUpdate = (req, res) =>
  res.render("pages/tasks/update", {
    task: {
      _id: req.task._id,
      title: req.task.title,
      description: req.task.description,
      date_debut: dateToString(req.task.date_debut),
      date_fin: dateToString(req.task.date_fin),
      done: req.task.done,
    },
  });

const postTask = async (req, res) => {
  const taskToAdd = {
    title: req.body.title,
    description: req.body.description,
    done: req.body.done ?? false,
  };

  taskToAdd.date_debut = stringToDate(req.body.date_debut);
  taskToAdd.date_fin = stringToDate(req.body.date_fin);

  const addedTask = new Task({ ...taskToAdd });
  await addedTask.save();
  res.redirect("/tasks");
};

const getTaskById = (req, res) => {
  res.json(req.task);
};

const deleteTaskById = async (req, res) => {
  await Task.deleteOne({ _id: req.task._id });
  res.status(204).end();
};

const updateTaskById = async (req, res) => {
  req.task = {
    title: req.body.title ?? req.task.title,
    description: req.body.description ?? req.task.description,
    date_debut: req.body.date_debut
      ? stringToDate(req.body.date_debut)
      : req.task.date_debut,
    date_fin: req.body.date_fin
      ? stringToDate(req.body.date_fin)
      : req.task.date_fin,
    done: req.body.done ?? req.task.done,
  };

  await req.task.save();
  res.json(req.task);
};

module.exports = {
  findTaskById,
  getAll,
  postTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  renderCreate,
  renderUpdate,
};
