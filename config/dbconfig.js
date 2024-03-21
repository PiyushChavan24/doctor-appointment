/** @format */
/** 
require("dotenv").config(); // Load environment variables from .env file

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
const connection = mongoose.connection;

// to verify the mongodb is connected to nodejs there is a way
connection.on("connection", () => {
 console.log("MongoDB is connected");
});
connection.on("error", (error) => {
 console.log(" error", error);
});

module.exports = mongoose;
**/
