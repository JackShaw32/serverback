const express = require("express");
const api = express.Router();
const foodController = require("../controllers/food");

const multiparty = require("connect-multiparty");
const md_upload = multiparty({ uploadDir: "./uploads/food" });

api.get("/foods", foodController.getFoods);
api.post("/food", [md_upload], foodController.createFood);
api.put("/food/:id", [md_upload], foodController.updateFood);
api.delete("/food/:id", foodController.deleteFood);

module.exports = api;