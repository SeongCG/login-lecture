"use strict";

//modules 
const express = require("express");
const app = express();

//router
const home = require("./src/routes/home");

//port
const port = 3000;

//app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들 웨어를 등록해주는 메소드.

module.exports = app;