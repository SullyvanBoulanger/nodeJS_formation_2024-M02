require("./src/config/database");
const express = require("express");
const taskRouter = require("./src/router/taskRouter");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(taskRouter);

app.listen(port, () => {
  console.log("App listening");
});
