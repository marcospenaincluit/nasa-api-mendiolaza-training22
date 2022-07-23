const User = require('../models/users.model');

async function addUser(req, res){
    const data = req.body;
    const user = new User(data);
    await user.save().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(400);
        console.error(err);
        res.json(err);
    })
}

async function getUsers(req, res){
    const {province} = req.query;
    const query = {province};
    await User.find(query)
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })

}

async function getUserById(req, res){
    const { id } = req.params;
    const user = await User.findById(id)
        .then(data => {
            res.json(data);
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })

}

async function updateUserById(req, res){
    const { id } = req.params;
    const data = req.body;
    await User.findById(id)
        .then((user) => {
            user.name = data.name;
            user.province = data.province;
            user.pets = data.pets;
            user.save();
            res.json({
                operation: 'Edit user',
                message: 'OK',
                data: user,
            })
        }).catch((err) => {
            res.status(400);
            console.error(err);
            res.json(err);
        })
        
}

module.exports = { addUser , getUsers, getUserById, updateUserById};