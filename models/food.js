const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
    title: String,
    releaseYear: Number,
    category: String,
    description: String,
    rating: Number,
    image: String,
});

module.exports = mongoose.model("food", FoodSchema);