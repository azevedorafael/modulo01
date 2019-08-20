const express = require('express');

const server = express();

const users = ['Rafael', 'Silva', 'Azevedo']

server.get('/users/:index', (req,res) => {
    const {index}  = req.params

    return res.json({message: `${users[index]}`});
});

server.listen(3000);

