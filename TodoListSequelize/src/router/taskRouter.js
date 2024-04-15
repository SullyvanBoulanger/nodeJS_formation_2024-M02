const {
  findTaskById,
  getAll,
  postTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
} = require("../controller/taskController");
const {
  pathIdValidator,
  postTaskValidator,
  putTaskValidator,
  errorMiddleware
} = require("../validator/taskValidator");

const express = require("express");

const taskRouter = express.Router();

taskRouter.route("/tasks").get(getAll).post([postTaskValidator, errorMiddleware], postTask);

taskRouter
  .route("/task/:id")
  .get([pathIdValidator, errorMiddleware, findTaskById], getTaskById)
  .put([pathIdValidator, putTaskValidator, errorMiddleware, findTaskById], updateTaskById)
  .delete([pathIdValidator, findTaskById], deleteTaskById);

module.exports = taskRouter;
