const {
  findTaskById,
  getAll,
  postTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  renderCreate,
  renderUpdate,
} = require("../controller/taskController");
const {
  pathIdValidator,
  postTaskValidator,
  putTaskValidator,
  errorMiddleware,
} = require("../validator/taskValidator");

const express = require("express");

const taskRouter = express.Router();

taskRouter
  .route("/tasks")
  .get(getAll)
  .post([postTaskValidator, errorMiddleware], postTask);

taskRouter.get("/tasks/create", renderCreate);

taskRouter
  .route("/task/:id")
  .get([errorMiddleware, findTaskById], getTaskById)
  .post(
    [putTaskValidator, errorMiddleware, findTaskById],
    updateTaskById
  )
  .delete([findTaskById], deleteTaskById);

taskRouter.get(
  "/task/:id/update",
  [errorMiddleware, findTaskById],
  renderUpdate
);

module.exports = taskRouter;
