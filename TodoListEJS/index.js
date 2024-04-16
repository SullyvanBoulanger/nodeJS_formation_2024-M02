require("./src/config/database");
const bodyParser = require("body-parser");
const express = require("express");
const taskRouter = require("./src/router/taskRouter");
const app = express();
const port = 3000;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log("App listening");
});
