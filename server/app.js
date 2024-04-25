const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

DATABASE_CONNECTION = "mongodb+srv://ahmedwael:123456a@cluster0.xb8bh8m.mongodb.net/";
PORT = 6000;
mongoose
  .connect(DATABASE_CONNECTION, {
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running at : http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(error));

const calorie = require("./routes/calorie.routes.js");
const users = require("./routes/users.routes.js");

app.use("/calorie", calorie);
app.use("/users", users);