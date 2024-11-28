const express = require('express');
const router = express.Router();

// Головна сторінка
router.get('/', (req, res) => {
    res.render('index');
});

// Сторінка реєстрації
router.get('/register', (req, res) => {
    res.render('register', { errors: [] });
});

// Сторінка авторизації
router.get('/login', (req, res) => {
    res.render('login', { errors: [] });
});

router.use('/drugs', require('./drug'));

module.exports = router;
