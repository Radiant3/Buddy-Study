//creates express and connect to mongodb
const express = require("express");
const mongoose = require("mongoose");

//connect to backend API routes
const apiRouter = require("./backend/routes/INSERTNAMEOFFILEHERE");

//intialise to landing page
let path = require("path");
const app = express();
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "dist/app")));
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});

const url = "mongodb://127.0.0.1:27017/StudyBuddy";
/**
 * Connects server to mongo database
 * @param {String} url url location
 * @returns {String} message of successful connection 
 */
async function connect(url) {
	await mongoose.connect(url);
	return "Connected Successfully";
}
connect(url).catch((err) => console.log(err));

//link to api router
app.use("/INSERTNAME", apiRouter); 
server.listen(8080);