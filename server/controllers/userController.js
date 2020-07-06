const User = require('../models/User');

class userController {
    static getUsers (req, res) {
        const {page, perpage, sort} = req.query;
        User.paginate({}, { page: parseInt(page, 10), limit: parseInt(perpage, 10) , sort:{nama: parseInt(sort)}})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createUser (req, res) {
        const form = req.body;
        User.create(form)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getUserById (req, res) {
        const id = req.params.id;
        User.findById({_id : id})
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static editUser (req, res) {
        const id =  req.params.id;
        const form = req.body;
        User.findByIdAndUpdate({_id : req.params.id}, { 
            $set: form
        })
            .then(data => {
                return User.findById({_id : data._id})
            })
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteUser (req, res) {
        const id = req.params.id;
        User.findByIdAndRemove(id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = userController;