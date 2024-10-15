const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'users works'
    });
});

router.get('/:id', (req, res) => {
    res.json({
        message: 'user works'
    });
});

router.post('/', (req, res) => {
    res.json({
        message: 'user created'
    });
});

router.delete('/:id', (req, res) => {
    res.json({
        message: 'user deleted'
    });
});

router.patch('/:id', (req, res) => {
    res.json({
        message: 'user updated'
    });
});

module.exports = router;