require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
const apiVersion = process.env.API_VERSION;

const app = express();

//Configuracion Header HTTP - CORS
app.use(cors());

//Importar Rutas
const AuthRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const foodRoutes = require("./router/food");

//Configuracion Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuracion Static folter
app.use(express.static("uploads"));

//Configurar Rutas
app.use(`/api/${apiVersion}`, AuthRoutes);
app.use(`/api/${apiVersion}`, userRoutes);
app.use(`/api/${apiVersion})`, foodRoutes);


module.exports = app;
