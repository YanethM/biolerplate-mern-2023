const express = require("express");
const app = express();

const API_VERSION = "api/v1";

const userRoutes = require("./routes/user");
const serviceRoutes = require("./routes/service");

// Pruebas con extensión REST Client
app.use(express.json());

//Pruebas desde postman
app.use(express.urlencoded({ extended: true }));

// http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/users`, userRoutes);
app.use(`/${API_VERSION}/services`, serviceRoutes);

module.exports = app;
