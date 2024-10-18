const express = require('express');
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

router.post('/', (req, res) => {
    res.json({
        message: 'daily progress logged'
    });
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