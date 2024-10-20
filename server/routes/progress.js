const express = require('express');
const Progress = require('../models/progressModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'get progress'
    });
});

router.get('/:id', (req, res) => {
    res.json({
        message: 'get one days progress'
    });
});

router.post('/', async (req, res) => {
    const { name, questions, date } = req.body;
    try{
        const progress = await Progress.create({name, questions, date});
        res.status(200).json(progress);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete('/:id', (req, res) => {
    res.json({
        message: 'daily progress deleted'
    });
});

router.patch('/:id', (req, res) => {
    res.json({
        message: 'progress updated'
    });
});

module.exports = router;