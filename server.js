const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfuly");
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// Require files
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// Use
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use("/", express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
