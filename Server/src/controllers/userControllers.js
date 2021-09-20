const usersServices = require("../services/usersServices");

async function create(req, res, next) {
    try {
        const user = await usersServices.createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function reserve(req, res, next){
    try {
        const user = await usersServices.reserve(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUser(req, res, next){
    try {
        const user = await usersServices.getUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function editUser(req, res, next){
    try {
        const user = await usersServices.editUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function deleteUser(req, res, next){
    try {
        const user = await usersServices.deleteUser(req.body);

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}



module.exports = {
    create,
    reserve,
    getUser,
    editUser,
    deleteUser
};