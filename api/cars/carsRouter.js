const express = require('express');

const router = express.Router();

const Cars = require('./carsModel');

router.get('/', (req, res) => {
    Cars.find()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error", err})
    })
})

router.get('/:id', (req, res) => {
    Cars.findById(req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error", err})
    })
})

router.post('/', (req, res) => {
    Cars.insert(req.body)
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error", err})
    })
})

router.put('/:id', (req, res) => {
    Cars.update(req.params.id, req.body)
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error", err})
    })
})

router.delete('/:id', (req, res) => {
    Cars.remove(req.params.id)
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "Error", err})
    })
})

module.exports = router;