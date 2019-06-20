
const express = require('express');
const Users = require('../users/usersModel.js')
const server = express()
server.use(express.json())


server.get('/', (req, res) => {
    res.status(200).json({api: "working"})
})

// server.get('/users', (req, res) => {
//     Users.get()
//     .then( users => {
//         res.status(200).json(users)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// })


module.exports = server;
