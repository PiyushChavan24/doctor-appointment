/** @format */

// entry point of backend
const express = require("express");
const app = express();
const dbconfig = require("./config/dbconfig");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port${port}`));
