const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const router = require("./Router/router");

const app = express();
app.use(cors());
// To read JSON data in URL body
app.use(bodyParser.json());

// To read log URLs
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);
//Starting server

async function run() {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port no:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the server:", error);
  }
}

run();
