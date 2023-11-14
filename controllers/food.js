const Food = require("../models/food");
const image = require("../utils/image");

async function createFood(req, res) {
    const newFood = new Food(req.body);

    if(req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        newFood.image = imagePath;
    }

    try {
        await newFood.save();
        res.status(200).send({ msg: "pedido guardado" });
    } catch (error) {
        res.status(500).send({ msg: `Error al crear el pedido: ${error}` });
    }
}

async function getFood(req, res) {
    try {
        const food = await Food.find();
        res.status(200).send(Food);
    } catch (error) {
        res.status(500).send({ msg: "Error al obtener Comidas" });
    }
}

async function updateFood(req, res) {
    const { id } = req.params;
    const foodData = req.body;

    if(req.files.image) {
        const imagePath = image.getFileName(req.files.image);
        foodData.image = imagePath;
    }

    try {
        await Food.findByIdAndUpdate({ _id: id }, foodData);
        res.status(200).send({ msg: "Actualizacion de pedido exitoso" });
    } catch (error) {
        res.status(400).send({ msg: "Error al actualizar pedido" });
    } 
}

async function deleteFood(req, res) {
    const { id } = req.params;

    try {
        await Food.findByIdAndDelete(id);
        res.status(200).send({ msg: "Pedido Eliminado" });
    } catch (error) {
        res.status(400).send({ msg: "Error al eliminar pedido" });
    }
}

module.exports = {
    createFood,
    updateFood,
    updateFood,
    deleteFood,
};