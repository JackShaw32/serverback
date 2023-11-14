const User = require("../models/user");

async function getMe(req, res) {
    const { user_id } = req.user;

    const user = await User.findById(user_id);

    if(!user) {
        res.status(400).send({ msg: "no se a encontrado usuario" });
    }else{
        res.status(200).send(user);
    }

}

module.exports = {
    getMe,
};