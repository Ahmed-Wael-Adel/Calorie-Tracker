const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const DataBase_conn = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

console.log("DataBaseURL" + " " + DataBase_conn)

mongoose
  .connect(DataBase_conn, {
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server is running at : http://localhost:${port}`)
    )
  )
  .catch((error) => console.error(error));

const calorie = require("./routes/calorie.routes.js");
const users = require("./routes/users.routes.js");

app.use("/calorie", calorie);
app.use("/users", users);